import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const Dashboard = () => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  const handleLogout = async () => {
    setError('')
    try {
      await logout()

      history.push('/log-in')
    } catch (ex) {
      setError(ex.message)
    }
  }
  return (
    <>
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4'>Profile</h2>
            {error && <div className='alert alert-danger'>{error}</div>}
            <strong>Email :</strong> {currentUser.email}
            <Link to='update-profile' className='btn btn-primary w-100 mt-3'>
              Update Profile
            </Link>
          </div>
        </div>
        <div className='w-100 text-center mt-2'>
          <button className='btn-link btn' onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </>
  )
}

export default Dashboard
