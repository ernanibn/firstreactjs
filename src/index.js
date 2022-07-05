import React from "react"
import ReactDOM from "react-dom/client"
// import ReactDOM from "react-dom"
// component file
import TodoContainer from "./functionBased/components/TodoContainer"

//stylesheet
import "./functionBased/App.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
  )

// ReactDOM.render(
//   <React.StrictMode>
//     <TodoContainer />
// </React.StrictMode>,  document.getElementById("root")
// )