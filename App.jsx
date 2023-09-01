import SignUpForm from './componets/SignUpForm'
import Authenticate from './componets/Authenticate'
import './App.css'
import { useState } from 'react'

function App() {
  
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  )
}

export default App
