import React from 'react'

const SignUp = () => {
  return (
    <div className=''>
      <div className='card'>
        <div className='card-body'>
          <h2 className='text-center mb-4'>Sign Up</h2>

          <form action=''>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                required
                id='email'
                name='email'
                type='email'
                placeholder='Enter your email here'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                required
                id='password'
                name='password'
                type='password'
                placeholder='Enter your password here'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password-confirmation'>
                Password Confirmation
              </label>
              <input
                required
                id='password-confirmation'
                name='password-confirmation'
                type='password'
                placeholder='ReWrite your password'
                className='form-control'
              />
            </div>

            <button type='submit' className='w-100 btn btn-primary mt-5'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className='w-100 text-center mt-2'>
        Already Have an Account? Log in
      </div>
    </div>
  )
}

export default SignUp
