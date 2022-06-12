import React from "react"
import { createRoot } from "react-dom/client"
import ExampleComponent from "./components/ExampleComponent"

function App() {
  return (
    <div>
      <h1 className="text-4xl my-5 text-indigo-600">This headline is from client-side React.</h1>
      <ExampleComponent />
    </div>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)
