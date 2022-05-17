import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdSportsCricket } from 'react-icons/md'
import { BiStats } from 'react-icons/bi'

function BottomlNavbar() {
  return (
    <nav className='app-bottom-navigation-bar'>
      <ul className='navbar-items p-0 h-100'>
        <li className='navbar-item'>
          <AiFillHome size={'20px'} />
          <div className='mt=2'>Home</div>
        </li>
        <li className='navbar-item'>
          <MdSportsCricket size={'20px'} />
          <div className='mt=2'>Matches</div>
        </li>
        <li className='navbar-item'>
          <BiStats size={'20px'} />
          <div className='mt=2'>Stats</div>
        </li>
        <li className='navbar-item'>
          <BsFillPersonFill size={'20px'} />
          <div className='mt=2'>Profile</div>
        </li>
      </ul>
    </nav>
  )
}

export default BottomlNavbar
