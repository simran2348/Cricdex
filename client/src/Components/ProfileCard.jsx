import React from 'react'
import Wave from '../Assets/svg/wave.svg'

function ProfileCard({ name, email }) {
  return (
    <div
      className='user-profile-card'
      style={{ backgroundImage: `url(${Wave})` }}
    >
      <div className='user-profile-card-text'>Hi {name}</div>
    </div>
  )
}

export default ProfileCard
