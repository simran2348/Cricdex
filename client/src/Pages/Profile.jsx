/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { logout } from '../Actions/authAction'
import { connect } from 'react-redux'
import ProfileCard from '../Components/ProfileCard'
import { RiLogoutCircleRLine } from 'react-icons/ri'

function Profile({ logout, auth: { user, loading } }) {
  const [appUser, setAppUser] = useState({
    name: '',
    email: ''
  })

  useEffect(() => {
    setAppUser({
      ...appUser,
      name: user?.name,
      email: user?.email
    })
  }, [loading])

  const { name, email } = appUser
  return (
    <>
      <ProfileCard name={name} email={email} />
      <div className='auth-bar'>
        <button className='auth-button' type='button' onClick={logout}>
          Logout
          <RiLogoutCircleRLine className='ms-2' fill='var(--theme)' size={25} />
        </button>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.authReducer
})

export default connect(mapStateToProps, { logout })(Profile)
