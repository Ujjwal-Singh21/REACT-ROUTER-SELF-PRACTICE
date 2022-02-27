import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useAuth } from './auth'

function Login () {
  const [user, setUser] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  const redirectedPath = location.state?.path || '/'

  const handleLogin = () => {
    auth.logIn(user)
    navigate(redirectedPath, { replace: true })
  }

  return (
    <div>
      <div>
        <label> Enter Username : </label>
        <input type='text' onChange={e => setUser(e.target.value)} />
        <button type='button' onClick={handleLogin}> Log-In </button>
      </div>
    </div>
  )
}

export default Login
