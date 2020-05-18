import React, { useState } from 'react'
import './message.scss'

const Message = function Message({}) {
  const [message, setMessage] = useState('oh hi')

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <>
      <input value={message} onChange={handleChange} />
      <h4 className="message">{message}</h4>
    </>
  )
}

export { Message }