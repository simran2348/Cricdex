import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Pages/Home'
import Matches from '../Pages/Matches'
import Statistics from '../Pages/Statistics'
import Profile from '../Pages/Profile'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import ForgotPassword from '../Pages/ForgotPassword'
import NotFound from '../Pages/NotFound'
import PrivateRoute from '../Utils/PrivateRoute'
import Spinner from '../Layout/Spinner'
import { connect } from 'react-redux'

const AppRoutes = ({ auth: { loading, user, isAuthenticated } }) => {
  return (
    <>
      {loading && user === null && <Spinner />}
      <Routes>
        <Route exact path='/' element={<Navigate to='/home' replace />} />
        <Route
          path='/home'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path='/matches'
          element={
            <PrivateRoute>
              <Matches />
            </PrivateRoute>
          }
        />
        <Route
          path='/statistics'
          element={
            <PrivateRoute>
              <Statistics />
            </PrivateRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.authReducer
})

export default connect(mapStateToProps)(AppRoutes)
