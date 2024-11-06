import { Route, Routes } from 'react-router-dom'
import './App.css'
import Maylayout from './layout/Maylayout'
import Home from './pages/Home'
import Likes from './pages/Likes'
import Detail from './pages/Detail'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/likes' element={<Maylayout><Likes/></Maylayout>}></Route>
        <Route path='/' element={<Maylayout><Home/></Maylayout>}></Route>
        <Route path='/detail/:id' element={<Maylayout><Detail/></Maylayout>}></Route>
      </Routes>
    </div>
  )
}

export default App
