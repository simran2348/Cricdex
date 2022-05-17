import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdSportsCricket } from 'react-icons/md'
import { BiStats } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'

function BottomlNavbar() {
  const location = useLocation()
  const tabs = [
    {
      id: 1,
      label: 'Home',
      path: '/home',
      icon: <AiFillHome size={18} />
    },
    {
      id: 2,
      label: 'Matches',
      path: '/matches',
      icon: <MdSportsCricket size={18} />
    },
    {
      id: 3,
      label: 'Stats',
      path: '/statistics',
      icon: <BiStats size={18} />
    },
    {
      id: 4,
      label: 'Profile',
      path: '/profile',
      icon: <BsFillPersonFill size={18} />
    }
  ]

  return (
    <nav className='app-bottom-navigation-bar'>
      <ul className='navbar-items p-0 h-100'>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={
              tab.path === location.pathname
                ? 'navbar-item navbar-item-active'
                : 'navbar-item'
            }
          >
            <Link to={tab.path} className='navbar-item-link'>
              {tab.icon}
              <div className='mt=2 navbar-item-text'>{tab.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default BottomlNavbar
