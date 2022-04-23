import React, { useEffect, useState } from 'react'
import {auth} from '../Firebase/Config'

function Navbar({user}) {
    const [fixed,setFixed]=useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY>100){
                setFixed(true)
            }
            else {
                setFixed(false)
            }
        })
    })
  return (
    <div className={`navbar ${fixed && "fixedNav"}`}>
        <a href="#" className='brand'>
            <img src="https://raw.githubusercontent.com/javohirdev/netflix-clone/main/src/components/assets/logo.png" alt="Netflix" />
        </a>
        <button className='logout' onClick={()=>auth.signOut()}>
            <img src={user.photoURL} alt="User photo" className='userImg' />
        </button>
    </div>
  )
}

export default Navbar