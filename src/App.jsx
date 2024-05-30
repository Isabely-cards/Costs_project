import {Routes, BrowserRouter, Route } from "react-router-dom"
import Core from "./Core"
import Home from "./pages/Home"
import NewProject from "./pages/NewProject"
import Project from "./pages/Projects"
import EditProject from "./pages/Projects/EditProject"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route pat="/" element={<Core/>}>

          <Route index element={<Home/>} /> 
          <Route path="newProject" element={<NewProject/>}/> 
          <Route path="myProject" element={<Project/>}/> 
          <Route path="EditProject" element={<EditProject/>}/> 
      
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
