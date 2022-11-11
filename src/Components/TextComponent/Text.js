import React from 'react'
import '../global.css';

const Text = ({text ,style }) => {
  return (
    <div className={style}>
    {text}
    </div>
  )
}

export default Text