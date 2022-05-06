import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const RouteDecider = ({ ...props }) => {
  // const temp = JSON.parse(localStorage.getItem('LoggedIn'))
  const temp = true

  if (!temp) {
    return <Redirect to='/Login' />
  } else return <Route {...props} />
}
