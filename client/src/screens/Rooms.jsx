import React, { useState, useRef, useEffect } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import Peer from "peerjs";
import io from "socket.io-client";
import { Phone, CameraOff, MicOff, Camera, Mic } from "lucide-react";

const socket = io.connect("http://localhost:3000");

const Rooms = () => {
  const [me, setMe] = useState("");
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");
  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      setStream(stream);
      if (myVideo.current) {
        myVideo.current.srcObject = stream;
      }
    });

    socket.on("user", (id) => {
      setMe(id);
    });

    socket.on("callUser", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });
  }, []);

  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream
    });

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name
      });
    });

    peer.on("stream", (stream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream
    });

    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller });
    });

    peer.on("stream", (stream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  };

  const toggleCamera = () => {
    if (stream) {
      stream.getVideoTracks()[0].enabled = !cameraOn;
      setCameraOn(!cameraOn);
    }
  };

  const toggleMic = () => {
    if (stream) {
      stream.getAudioTracks()[0].enabled = !micOn;
      setMicOn(!micOn);
    }
  };

  return (
    <div>
      <h1 className="text-center text-black">Peer to Peer Communication</h1>
      <div className="container mx-auto rounded-md">
        <div className="video-container flex justify-center items-center mb-10 rounded-md" >
          <div className="video relative flex " >
            {stream && <video playsInline  ref={myVideo} autoPlay className="w-72" />}
            <button onClick={toggleCamera} className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded-full">
              {cameraOn ? <Camera /> : <CameraOff />}
            </button>
            <button onClick={toggleMic} className="absolute top-2 right-12 p-2 bg-gray-800 text-white rounded-full">
              {micOn ? <Mic />:<MicOff />  }
            </button>
          </div>
          <div className="video w-max rounded-md">
            {callAccepted && !callEnded ? (
              <video playsInline ref={userVideo} autoPlay className="w-100 h-100" />
            ) : null}
          </div>
        </div>
        <div className="myId">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-5 p-2 rounded"
          />
          <CopyToClipboard text={me}>
            <button className="mb-8 p-2 bg-blue-500 text-white rounded flex items-center">
              <span className="mr-2" />
              Copy ID
            </button>
          </CopyToClipboard>
          <textarea
            type="text"
            placeholder="ID to call"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
            className="mb-5 p-2 rounded"
          />
          <div className="call-button">
            {callAccepted && !callEnded ? (
              <button className="p-2 bg-red-500 text-white rounded" onClick={leaveCall}>
                End Call
              </button>
            ) : (
              <button className="p-2 bg-blue-500 text-white rounded flex items-center" onClick={() => callUser(idToCall)}>
                <Phone className="mr-2" />
                Call
              </button>
            )}
            {idToCall}
          </div>
        </div>
        <div>
          {receivingCall && !callAccepted ? (
            <div className="caller">
              <h1>{name} is calling...</h1>
              <button className="p-2 bg-blue-500 text-black rounded" onClick={answerCall}>
                Answer
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
