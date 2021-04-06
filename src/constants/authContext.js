import React, { useContext } from 'react'

const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const values = {}

  return <AuthContext.Provider value={values} children={children} />
}

export const useAuth = () => {
  return useContext(AuthContext)
}
