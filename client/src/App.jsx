import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [backendMessage, setBackendMessage] = useState('')
  const [pathMessage, setPathMessage] = useState('')

  // Fetch messages from backend routes
  useEffect(() => {
    // Fetch root route message
    fetch(`http://${process.env.BACKEND_URL}/`)
      .then(response => response.text())
      .then(data => setBackendMessage(data))
      .catch(error => console.error('Error fetching root route:', error))

    // Fetch /path route message
    fetch(`http://${process.env.BACKEND_URL}/path`)
      .then(response => response.text())
      .then(data => setPathMessage(data))
      .catch(error => console.error('Error fetching path route:', error))
  }, [])

  return (
    <div className="App">
      <h1>Frontend-Backend Integration</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className="backend-messages">
        <h2>Backend Messages:</h2>
        <h2>Root Route: {backendMessage}</h2>
        <h2>Path Route: {pathMessage}</h2>
      </div>
    </div>
  )
}

export default App
