import { useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState('')
  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <h1>Advice {num}</h1>
    </div>
  )
}

export default App
