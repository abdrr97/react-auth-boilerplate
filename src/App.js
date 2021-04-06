import SignUp from './pages/SignUp'

function App() {
  return (
    <div
      className='container d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <SignUp />
      </div>
    </div>
  )
}

export default App
