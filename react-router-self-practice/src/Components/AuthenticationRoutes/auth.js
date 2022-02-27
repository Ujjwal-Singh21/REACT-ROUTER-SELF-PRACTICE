import React, { useState, useContext } from 'react'

const AuthContext = React.createContext(null)
const AuthContextProvider = AuthContext.Provider

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const logIn = (user) => {
    setUser(user)
  }

  const logOut = () => {
    setUser(null)
  }

  return (
    <div>
      <AuthContextProvider value={{user, logIn, logOut}}>
          { children }
      </AuthContextProvider>
    </div>
  )
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}

