import React from 'react'
import file from "../img/file.png"
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Something...' className='textfield' />
      <div className='send'>
        {/* <img src="" alt="" /> */}
        <input type="file" style = {{display:"none"}} id="file" />
        <div className="options">
          <label htmlFor="file">
            <img src={file} alt="" />
          </label>
          <button>Send</button>
        </div>
       </div> 
    </div>
  )
}

export default Input
