/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { logout } from '../Actions/authAction'
import { connect } from 'react-redux'
import ProfileCard from '../Components/ProfileCard'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import AuthButton from '../Components/AuthButton'
import Copyright from '../Components/Copyright'

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
      <div className='d-flex justify-content-end mt-4'>
        <span className='forgot-password-link'>Edit Details</span>
      </div>
      <AuthButton
        onClick={logout}
        icon={
          <RiLogoutCircleRLine className='ms-2' fill='var(--theme)' size={25} />
        }
        label='Logout'
        type='button'
        align='center'
      />
      <Copyright />
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.authReducer
})

export default connect(mapStateToProps, { logout })(Profile)
