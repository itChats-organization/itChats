import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    axios.get('http://localhost:5000/api/message')
      .then(res => setMessage(res.data.message))
      .catch(() => setMessage('Error connecting to backend'))
  }, [])

  return (
    <div>
      <h1>React + Express App</h1>
      <p>{message}</p>
    </div>
  )
}

export default App
