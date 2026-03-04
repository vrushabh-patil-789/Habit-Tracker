import Home from "./components/Home";
import Pomodoro from "./components/Pomodoro";
import { Route, Routes } from "react-router-dom";


function App() {
  return(
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/pomodoro" element={<Pomodoro/>}/>
    </Routes>
  )
}

export default App