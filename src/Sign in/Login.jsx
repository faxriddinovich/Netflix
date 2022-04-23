import React from 'react'
import {signInWithGoogle} from '../Firebase/Config'

function Login() {
  return (
    <div className='login'>
        <img src="https://raw.githubusercontent.com/javohirdev/netflix-clone/main/src/components/assets/logo.png" alt="Logo" loading='lazy'/><br />
        <button onClick={signInWithGoogle}>
            Sign in with Google
        </button>
    </div>
  )
}

export default Login