import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} /> 
        <Route path="/user-profile" Component={UserProfile} /> 
      </Routes>
    </>
  )
}

export default App
