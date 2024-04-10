import React from 'react'
import icon3 from "../img/icon3.jpg"
const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={icon3} alt=""/>
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={icon3} />
      </div>
    </div>
  )
}

export default Message
