import { useState } from 'react'
import Preview from "./section/Preview.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Preview/>
     </div>
    </>
  )
}

export default App
