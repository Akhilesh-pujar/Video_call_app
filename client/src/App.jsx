
import './App.css'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage'
import Lobby from './screens/Lobby'
import Rooms from './screens/Rooms'
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/lobby' element={<Lobby/>}/>
      <Route path='/room' element={<Rooms/>}/>
    </Routes>
   
    </BrowserRouter>
  )
}

export default App
