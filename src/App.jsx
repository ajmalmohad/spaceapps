import './App.css'
import {Routes, Route} from 'react-router-dom'
import Discover from './pages/Discover'
import MyProfile from './pages/MyProfile'
import CreateProject from './pages/CreateProject'
import ManageProjects from './pages/ManageProjects'
import MyProjects from './pages/MyProjects'
import Login from './pages/Login'
import AntiProtected from './components/AntiProtected' 
import Protected from './components/Protected'
import ProjectDetails from './pages/ProjectDetails'
import Profiles from './pages/Profiles'


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Protected><Discover/></Protected>} /> 
        <Route path="/login" element={<AntiProtected><Login/></AntiProtected>} /> 
        <Route path="/my-profile" element={<Protected><MyProfile/></Protected>} /> 
        <Route path="/my-projects" element={<Protected><MyProjects/></Protected>} /> 
        <Route path="/create-project" element={<Protected><CreateProject/></Protected>} /> 
        <Route path="/my-collaborations" element={<Protected><ManageProjects/></Protected>} /> 
        <Route path="/project" element={<Protected><ProjectDetails/></Protected>} /> 
        <Route path="/create-profile" element={<Profiles/>} />
      </Routes>
    </div>
  )
}

export default App
