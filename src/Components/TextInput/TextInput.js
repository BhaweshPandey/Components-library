import React from 'react'
import './textInput.css'

const TextInput = ({ label , type , placeholder }) => {
  return (
    <div className='input'>
        <form>
            <label >{label}</label><br/>
            <input type={type} placeHolder={placeholder} />
        </form>
    </div>
  )
}


export default TextInput