import React from 'react'
import { logout } from '../Actions/authAction'
import { connect } from 'react-redux'

function Profile({ logout }) {
  return (
    <div>
      <button className='btn btn-primary' onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default connect(null, { logout })(Profile)
