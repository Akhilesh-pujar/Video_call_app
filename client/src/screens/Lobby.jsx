import React,{useCallback, useEffect, useState} from 'react'
import {useSocket} from "../context/SocketProvider";
import { useNavigate } from 'react-router-dom';

const Lobby = () => {
  const[email,setemail] = useState("");
  const [room, setroom] = useState("");

  const navigate = useNavigate(); 
  const socket = useSocket();
  console.log(socket)
   
  const handleSubmit = useCallback((e)=>{
  e.preventDefault();
  socket.emit('room:join', {email,room});
 
  },[email,room,socket])

  const handleJoinRoom = useCallback((data)=>{
    const {email,room} = data;
    navigate(`/room/${room}`);


  })


  useEffect(()=>{ 
    socket.on("room:join",handleJoinRoom)
    return ()=>{
      socket.off('room:join', handleJoinRoom)
    }

  },[socket])

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">Lobby</h2>
          <p className="text-gray-500 mb-6">Join call.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Room number
              </label>
              <input
                id="room"
                type="text"
                placeholder="Enter your room number"
                className="border rounded-md py-2 px-3 w-full"
                value={room} onChange={(e)=>setroom(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="border rounded-md py-2 px-3 w-full"
                value={email} onChange={(e)=>setemail(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               Join now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Lobby