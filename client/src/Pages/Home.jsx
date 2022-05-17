import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Link className='btn btn-primary' to={'/sign-in'}>
        Signiin
      </Link>
      <Link to={'/sign-up'} className='btn btn-primary'>
        sinup
      </Link>
    </div>
  )
}

export default Home
