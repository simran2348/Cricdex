import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Pages/Home'
import Matches from '../Pages/Matches'
import Statistics from '../Pages/Statistics'
import Profile from '../Pages/Profile'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import ForgotPassword from '../Pages/ForgotPassword'
import NotFound from '../Pages/NotFound'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Navigate to='/home' replace />} />
      <Route path='/home' element={<Home />} />
      <Route path='/matches' element={<Matches />} />
      <Route path='/statistics' element={<Statistics />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
