import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

function Profile () {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logOut()
    navigate('/')
  }

    return (
      <div>
        <h2 className='userName'> Welcome {auth.user} </h2>
        <button type='button' onClick={handleLogout}> LogOut </button>
      </div>
    )
}

export default Profile
