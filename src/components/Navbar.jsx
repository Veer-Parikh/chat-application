import React, { useContext } from 'react'
import icon3 from "../img/icon3.jpg" 
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className="logo">Chat-astrophe</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt="123" />
        <span style={{margin:"0 10px",fontSize:"20px"}}>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
