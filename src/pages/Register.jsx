import React, { useState } from 'react';
import input from '../img/input.png';
import { auth,db } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate,Link } from "react-router-dom"

const Register = () => {
  const [err, setError] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
      // Upload profile picture to storage
      const storage = getStorage();
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', null, (error) => {
        // Handle upload errors
        console.error(error);
        setError('Failed to upload profile picture');
      }, async () => {
        // Handle successful upload
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        await updateProfile(res.user, { displayName, photoURL: downloadURL });
        await setDoc(doc(db, "users", res.user.uid), { 
          uid: res.user.uid,
          displayName, 
          email, 
          photoURL: downloadURL 
        });
        await setDoc(doc(db,"userChats",res.user.uid),{});
        navigate('/')

      });
    } catch (err) {
      // Handle authentication errors
      console.error(err);
      setError(err.message);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat-astrophe</span>
        <span className="title">Register</span>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: "none", boxShadow: "none", backgroundColor: "transparent" }} />
          <label htmlFor="file">
            <img src={input} alt="Add Avatar" />
            <span>Add an avatar</span>
          </label>
          <center><button style={{ cursor: "pointer" }}>Sign Up</button></center>
        </form>
        <center><p>Already have an account? <Link to='/login'>Login</Link></p></center>
        {err && <span>Something went wrong</span>}
      </div>
    </div>
  );
};

export default Register;
