import React, { lazy, Suspense } from 'react'
import { AuthProvider } from './context/authContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

const Signup = lazy(() => import('./pages/SignUp'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Login = lazy(() => import('./pages/Login'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const UpdateProfile = lazy(() => import('./pages/UpdateProfile'))

const App = () => {
  return (
    <div
      className='container d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <AuthProvider>
        <Router>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard} />
              <Route path='/sign-up' component={Signup} />
              <Route path='/log-in' component={Login} />
              <Route path='/update-profile' component={UpdateProfile} />
              <Route path='/forgot-password' component={ForgotPassword} />
              <Route path='*' component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
