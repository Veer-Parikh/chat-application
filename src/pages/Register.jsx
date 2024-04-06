import React from 'react'
import input from "../img/input.png"
const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">Chat-astrophe</span>
        <span className="title">Register</span>
        <form>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input type="file" id="file" style={{display:"none",boxShadow:"none",backgroundColor:"transparent"}}/>
            <label htmlFor="file">
                <img src={input} />
                <span>Add an avatar</span>
            </label>
            <center><button>Sign Up</button></center>
        </form>
        <center><p>Already have an account? Login</p></center>
      </div>
    </div>
  )
}

export default Register
