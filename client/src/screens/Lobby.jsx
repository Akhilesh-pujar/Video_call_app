import React,{useCallback, useEffect, useState} from 'react'
import {useSocket} from "../context/SocketProvider";
import { useNavigate } from 'react-router-dom';
import {v1 as uuid} from "uuid"

const Lobby = () => {
  const navigate = useNavigate();
 
  const handleSubmit=()=>{
    navigate("/room");
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">Lobby</h2>
          <p className="text-gray-500 mb-6">Join call.</p>
          <form onSubmit={handleSubmit}>
            
            
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               create room
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Lobby