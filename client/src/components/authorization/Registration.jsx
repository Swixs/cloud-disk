import React, { useState } from 'react'
import './Registration.css'
import Input from '../../utils/input'
import { registration } from '../../actions/user'

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="registration">
      <div className="registration__header">Registration</div>
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Input your gmail..."
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Input password..."
      />
      <button
        className="registration__button"
        onClick={() => registration(email, password)}
      >
        Register
      </button>
    </div>
  )
}

export default Registration
