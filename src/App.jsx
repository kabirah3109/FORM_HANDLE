import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from '../Components/UserLogin/UserLogin'
import UserSignup from '../Components/UserSignup/UserSignup'
import DashBoard from '../Components/DashBoard/DashBoard'
import ProtectedRoute from '../Components/ProtectRoute/ProtectRoute'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserSignup/>}/>
        <Route path='/login'element={<UserLogin/>}/>
        <Route path="/dashboard" element={<ProtectedRoute><DashBoard /></ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default App