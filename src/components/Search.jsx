import React, { useContext, useState } from 'react'
import icon3 from "../img/icon3.jpg"
import { collection, query, where, getDoc,getDocs, serverTimestamp } from "firebase/firestore";
import {db} from "../firebase"
import {AuthContext} from "../context/AuthContext"
import { doc, setDoc , updateDoc } from "firebase/firestore"; 

const Search = () => {
  const [username,setUsername] = useState("")
  const [user,setUser] = useState(null)
  const [err,setError] = useState(false)
  const {currentUser} = useContext(AuthContext)
   
  const handleSearch = async () =>{
    const q = query(collection(db, "users"),where("displayName","==",username))
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setUser(doc.data())
      });
    } catch(err){
      console.log(err)
      setError(true)
    }
  }
  
  const handleKey = e => {
    e.code === "Enter" && handleSearch()
  }

  const handleSelect =async () =>{
    //check if chat exists or not if not then create
    const combinedId = 
      currentUser.uid > user.uid ? 
        currentUser.uid + user.uid :
        user.uid + currentUser.uid
        try {
          const res = await getDoc(doc(db,"chats",combinedId));

          if(!res.exists()) {
            await setDoc(doc,(db,"chats",combinedId),{messages:[]})
            await updateDoc(doc(db,"userChats",currentUser.uid),{
              [combinedId+".userInfo"]:{
                uid:user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL
              },
              [combinedId+".date"]:serverTimestamp()
            })
            await updateDoc(doc(db,"userChats",user.uid),{
              [combinedId+".userInfo"]:{
                uid:currentUser.uid,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL
              },
              [combinedId+".date"]:serverTimestamp()
            })

          }
        } catch (err) {
        }
    //create chat
    setUser(null)
    setUsername("")
  }
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Search for Users...' onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)} value={username} />
      </div>
      {err && <span>user not found</span>}

      {user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="123"/>
        <div className="userChatInfo">
          <span>{user.displayName}</span>
          <p>User Messages</p>
        </div>
      </div>}
    </div>
  )
}

export default Search
