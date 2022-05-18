import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

function ForgotPassword({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Navigate to={'/home'} />
  }
  return <div>ForgotPassword</div>
}

const mapStateToProps = (state) => ({
  isAuthenticated: state?.authReducer?.isAuthenticated
})

export default connect(mapStateToProps)(ForgotPassword)
