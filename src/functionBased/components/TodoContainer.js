import { Route, Routes,BrowserRouter } from "react-router-dom"

import Navbar from "./Navbar"

import Home from "../pages/Home"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"


const TodoContainer = () => {
  // const [todos, setTodos] = useState([])

  return (
        <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path="/about/*" element={<About/>} />
    <Route path="*" element={<NotMatch/>} />
  </Routes>
        </BrowserRouter>
  )
}

export default TodoContainer