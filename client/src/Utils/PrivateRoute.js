import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ children, auth: { isAuthenticated, loading } }) => {
  return !isAuthenticated && !loading ? <Navigate to={'/sign-in'} /> : children
}

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state?.authReducer
})

export default connect(mapStateToProps)(PrivateRoute)
