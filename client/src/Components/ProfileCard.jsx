import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'

function ProfileCard({ name, avatar }) {
  return (
    <div className='d-flex position-relative' style={{ marginTop: '3rem' }}>
      <div className='user-profile-card d-flex justify-content-between w-100'>
        <svg className='wave-svg' viewBox='0 0 1440 320'>
          <path
            fill='var(--theme)'
            fillOpacity='1'
            d='M0,32L48,69.3C96,107,192,181,288,186.7C384,192,480,128,576,117.3C672,107,768,149,864,144C960,139,1056,85,1152,85.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
        <div className='user-profile-card-text'>Hi {name}</div>
      </div>
      <div>
        {avatar ? (
          <div
            style={{ backgroundImage: `url(${avatar})` }}
            className='profile-icon'
          />
        ) : (
          <BsFillPersonFill className='profile-icon' fill='#e1e1e1' size={50} />
        )}
      </div>
    </div>
  )
}

export default ProfileCard
