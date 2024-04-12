import {React,useState} from 'react'
import { auth,db } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate,Link } from "react-router-dom"
const Login = () => {
  const [err, setError] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth,email,password)
      navigate('/')
    } catch (err) {
      // Handle authentication errors
      console.error(err);
      setError(err.message);
    }
  };
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">Chat-astrophe</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <center><button style={{marginTop:"15px"}}>Sign In</button></center>
        </form>
        <center><p>Don't have an account? <Link to='/register'>SignUp</Link></p></center>
      </div>
    </div>
  )
}

export default Login
