import React, { useEffect, useState } from 'react'
import firebase from './Firebase/Config'
import Main from './Components/Main'
import Login from './Sign in/Login'
import './Components/responsive.css'

import './App.css'
import { getAuth } from 'firebase/auth'

function App() {
  const [user,setUser]= useState(null)

  useEffect(()=>{
    getAuth().onAuthStateChanged(user => {
      setUser(user)
    })
  },[])
  return (
    <div className='app'>
      {user ? <Main user={user}/> : <Login/>}
    </div>
  )
}

export default App