import React from 'react'
import icon3 from "../img/icon3.jpg"
const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src={icon3} alt="123"/>
        <div className="userChatInfo">
          <span>Manny</span>
          <p>User Messages</p>
        </div>
      </div>
      <div className="userChat">
        <img src={icon3} alt="123"/>
        <div className="userChatInfo">
          <span>Manny</span>
          <p>User Messages</p>
        </div>
      </div>
      <div className="userChat">
        <img src={icon3} alt="123"/>
        <div className="userChatInfo">
          <span>Manny</span>
          <p>User Messages</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
