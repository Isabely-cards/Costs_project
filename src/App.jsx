import {Routes, BrowserRouter, Route } from "react-router-dom"
import Core from "./Core"
import Home from "./pages/Home"
import NewProject from "./pages/NewProject"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route pat="/" element={<Core/>}>

          <Route index element={<Home/>} /> 
          <Route path="newProject" element={<NewProject/>}/> 

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
