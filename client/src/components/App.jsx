import Navbar from './navbar/Navbar'
import './app.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Registration from './authorization/Registration'
import Login from './authorization/Login'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { auth } from '../actions/user'
import Disk from './disk/Disk'

function App() {
  const isAuth = useSelector((state) => state.user.isAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(auth())
  }, [dispatch])

  useEffect(() => {
    if (isAuth) {
      navigate('/', { replace: true })
    }
  }, [isAuth, navigate])
  return (
    <div className="app">
      <Navbar />

      {!isAuth ? (
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Disk />} />
        </Routes>
      )}
    </div>
  )
}

export default App
