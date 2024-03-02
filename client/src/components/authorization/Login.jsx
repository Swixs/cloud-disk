import React, { useState } from 'react'
import './Registration.css'
import Input from '../../utils/input'
import {useDispatch} from 'react-redux'
import { login } from '../../actions/user'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  return (
    <div className="registration">
      <div className="registration__header">Authorization</div>
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
        onClick={() => dispatch(login(email, password))}
      >
        Sign in
      </button>
    </div>
  )
}

export default Login
