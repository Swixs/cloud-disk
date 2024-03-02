import React from 'react'
import './Navbar.css'

import LOGO from '../../Assets/Logo.png'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../reducers/userReducer'

const Navbar = () => {
  const isAuth = useSelector((state) => state.user.isAuth)
  const dispatch = useDispatch()
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__left-chapter">
          <img src={LOGO} alt="logo" className="navbar__logo" />
          <div className="navbar__header"> Mern Cloud</div>
        </div>
        <div className="navbar__right-chapter">
          {!isAuth && (
            <div className="navbar__login">
              <NavLink to="/login">Sign in</NavLink>
            </div>
          )}
          {!isAuth && (
            <div className="navbar__registration">
              <NavLink to="/registration">Registration</NavLink>
            </div>
          )}
          {isAuth && (
            <div className="navbar__login" onClick={() => dispatch(logout())}>
              Sign out
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
