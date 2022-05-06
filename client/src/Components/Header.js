import { Profile } from './Icons'
import { useEffect, useState } from 'react'

export const Header = (props) => {
  const [loggedIn, setLoggedIn] = useState()

  useEffect(() => {
    const status = JSON.parse(localStorage.getItem('LoggedIn'))
    setLoggedIn(status)
  }, [])
  return (
    <div className='app_header px-3'>
      <div
        className='app_logo_container'
        onClick={() => props.history.push('/Home')}
      >
        <h1 className='m-0 app_title'>Cricdex</h1>
      </div>
      <div
        className='app_profile_container'
        onClick={() => props.history.push('/Profile')}
      >
        <div className='profile_text'>Hi {loggedIn ? 'Simran' : 'User'}</div>
        <Profile size='30' color='var(--svg-regular-black)' />
      </div>
    </div>
  )
}
