import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const UpdateProfile = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassowrd, setConfirmPassowrd] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const { currentUser } = useAuth()

  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    if (password.trim() !== confirmPassowrd.trim()) {
      setPassword('')
      setConfirmPassowrd('')
      return setError('Passwords do not match 😭😭')
    }
    try {
      setError('')
      setIsLoading(true)
      //   await signup(email, password)
      //   history.push('/')
    } catch (ex) {
      setError(`${ex.message} 😢😢`)
    }
    setIsLoading(false)
  }
  return (
    <>
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4'>Update Profile</h2>

            <form action='' onSubmit={handleUpdateProfile}>
              {error && <div className='alert alert-danger'>{error}</div>}

              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  id='email'
                  name='email'
                  type='email'
                  placeholder='email goes here '
                  className='form-control'
                  value={currentUser.email}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id='password'
                  name='password'
                  type='password'
                  placeholder='Leave it empty to keep the same'
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password-confirmation'>
                  Password Confirmation
                </label>
                <input
                  value={confirmPassowrd}
                  onChange={(event) => setConfirmPassowrd(event.target.value)}
                  id='password-confirmation'
                  name='password-confirmation'
                  type='password'
                  placeholder='Leave it empty to keep the same'
                  className='form-control'
                />
              </div>

              <button
                disabled={isLoading}
                type='submit'
                className='w-100 btn btn-primary mt-5'
              >
                {isLoading ? (
                  <div className='d-flex justify-content-center'>
                    <div className='spinner-border' role='status'>
                      <span className='sr-only'>Loading...</span>
                    </div>
                  </div>
                ) : (
                  'Update Profile'
                )}
              </button>
            </form>
          </div>
        </div>
        <div className='w-100 text-center mt-2'>
          <Link to='/'>Cancel</Link>
        </div>
      </div>
    </>
  )
}

export default UpdateProfile
