import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateAccount from './components/login/CreateAccount'
import Login from './components/login/Login'
// import DetailComponent from './components/details/DetailComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateAccount />
      <Login />
      {/* <DetailComponent /> */}
    </>
  )
}

export default App
