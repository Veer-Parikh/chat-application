import React from 'react'
const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">Chat-astrophe</span>
        <span className="title">Register</span>
        <form>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <center><button style={{marginTop:"15px"}}>Sign In</button></center>
        </form>
        <center><p>Don't have an account? SignUp</p></center>
      </div>
    </div>
  )
}

export default Login
