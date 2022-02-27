import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails () {
  const params = useParams()
  const userID = params.userId
  return (
    <div>
      <h1> Details of User with UserID - {userID} </h1>
    </div>
  )
}

export default UserDetails
