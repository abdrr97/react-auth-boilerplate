import React, { useContext, useState, useEffect } from 'react'

import { auth } from '../firebase'

const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const signup = async (email, password) => {
    return await auth.createUserWithEmailAndPassword(email, password)
  }

  const login = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password)
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setIsLoading(false)
    })
    return unsubscribe
  }, [])

  const values = {
    currentUser,
    signup,
    login,
  }
  return (
    <AuthContext.Provider value={values} children={!isLoading && children} />
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
