import React, { lazy, Suspense } from 'react'
import { AuthProvider } from './context/authContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Signup = lazy(() => import('./pages/SignUp'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Login = lazy(() => import('./pages/Login'))

const App = () => {
  return (
    <div
      className='container d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <Router>
        <AuthProvider>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/sign-up' component={Signup} />
              <Route path='/log-in' component={Login} />
              <Route path='*' component={NotFound} />
            </Switch>
          </Suspense>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
