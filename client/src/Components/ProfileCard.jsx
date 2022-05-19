import React from 'react'
import Wave from '../Assets/svg/wave.svg'
import { BsFillPersonFill } from 'react-icons/bs'

function ProfileCard({ name, email }) {
  return (
    <div
      className='user-profile-card d-flex justify-content-between'
      style={{ backgroundImage: `url(${Wave})` }}
    >
      <div className='user-profile-card-text'>Hi {name}</div>
      <div>
        <BsFillPersonFill className='profile-icon' fill='#e1e1e1' size={50} />
      </div>
    </div>
  )
}

export default ProfileCard
