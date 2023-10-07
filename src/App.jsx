import './App.css'
import {Routes, Route} from 'react-router-dom'
import Discover from './pages/Discover'
import MyProfile from './pages/MyProfile'
import CreateProject from './pages/CreateProject'
import MyProjects from './pages/MyProjects'
import Login from './pages/Login'
import AntiProtected from './components/AntiProtected' 
import Protected from './components/Protected'
import ProjectDetails from './pages/ProjectDetails'
import MyCollaborations from './pages/MyCollaborations'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Protected><Discover/></Protected>} /> 
        <Route path="/login" element={<AntiProtected><Login/></AntiProtected>} /> 
        <Route path="/my-profile" element={<Protected><MyProfile/></Protected>} /> 
        <Route path="/my-projects" element={<Protected><MyProjects/></Protected>} /> 
        <Route path="/create-project" element={<Protected><CreateProject/></Protected>} /> 
        <Route path="/my-collaborations" element={<Protected><MyCollaborations/></Protected>} /> 
        <Route path="/project" element={<Protected><ProjectDetails/></Protected>} /> 
      </Routes>
    </div>
  )
}

export default App
