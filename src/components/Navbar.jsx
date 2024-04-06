import React from 'react'
import icon3 from "../img/icon3.jpg" 
const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat-astrophe</span>
      <div className='user'>
        <img src={icon3} alt="123" />
        <span style={{margin:"0 10px"}}>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
