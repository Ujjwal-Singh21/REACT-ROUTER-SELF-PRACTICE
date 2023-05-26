import React from 'react'
import { useAuth } from './auth'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function RequiredAuth ({ children }) {
  const auth = useAuth()
  const location = useLocation()
  
  return (
    <div>
      {
         !auth.user && <Navigate to='/logIn' state={{path: location.pathname}} />
      }

      {
         auth.user && children
      }
    </div>
  )
}

export default RequiredAuth
