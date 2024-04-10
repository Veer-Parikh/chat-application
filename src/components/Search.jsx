import React from 'react'
import icon3 from "../img/icon3.jpg"
const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Search for Users...' />
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

export default Search
