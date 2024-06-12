import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateAccount from './components/login/CreateAccount'
import Login from './components/login/Login'
import ForgotPassword from './components/login/ForgotPassword'
// import DetailComponent from './components/details/DetailComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateAccount />
      <Login />
      <ForgotPassword />
      {/* <DetailComponent /> */}
    </>
  )
}

export default App
