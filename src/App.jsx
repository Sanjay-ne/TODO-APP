
import { useState } from 'react'
import './App.css'
import Profile from './Components/profile'
import { UserProvider } from './Contexts/UserContext'
import Inputform from './Components/Inputform'

function App() {
  

  return (
    <UserProvider >
     <h1>Hello context API</h1>
     <Profile></Profile>
     <Inputform></Inputform>
     </UserProvider>
  )
}

export default App
