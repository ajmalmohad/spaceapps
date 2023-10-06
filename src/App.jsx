import './App.css'
import {Routes, Route} from 'react-router-dom'
import Discover from './pages/Discover'
import MyProfile from './pages/MyProfile'
import CreateProject from './pages/CreateProject'
import ManageProjects from './pages/ManageProjects'
import MyProjects from './pages/MyProjects'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Discover} /> 
        <Route path="/my-profile" Component={MyProfile} /> 
        <Route path="/my-projects" Component={MyProjects} /> 
        <Route path="/create-project" Component={CreateProject} /> 
        <Route path="/manage-project" Component={ManageProjects} /> 
      </Routes>
    </>
  )
}

export default App
