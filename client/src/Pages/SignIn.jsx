import React, { useState } from 'react'
import { MdAlternateEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { AiFillEyeInvisible, AiFillEye, AiFillCaretRight } from 'react-icons/ai'
import { Link, Navigate } from 'react-router-dom'
import { login } from '../Actions/authAction'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function SignIn({ login, isAuthenticated }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isVisible, setIsVisible] = useState(false)
  const [focus, setFocus] = useState({
    type: '',
    selected: false
  })

  const onSubmit = (e) => {
    e.preventDefault()
    login({ email, password })
  }

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleShow = () => {
    setIsVisible((prev) => !prev)
  }

  const handleFocus = (value, type) => {
    setFocus({
      ...focus,
      type: type,
      selected: value
    })
  }

  if (isAuthenticated) {
    return <Navigate to={'/home'} />
  }

  const { email, password } = formData

  return (
    <>
      <h2 className='greeting-title m-0'>Welcome Back,</h2>
      <form onSubmit={onSubmit} className='mt-4 d-flex flex-column'>
        <div className='app-form-group'>
          <div
            className={
              focus.type === 'email' && focus.selected
                ? 'left-icon left-icon-focus'
                : 'left-icon'
            }
          >
            <MdAlternateEmail size={23} />
          </div>
          <input
            type={'email'}
            value={email}
            placeholder='Enter your email'
            className='app-input-field'
            onChange={onChange}
            id='email'
            required
            onFocus={() => handleFocus(true, 'email')}
            onBlur={() => handleFocus(false, 'email')}
          />
        </div>
        <div className='app-form-group mt-4'>
          <div
            className={
              focus.type === 'password' && focus.selected
                ? 'left-icon left-icon-focus'
                : 'left-icon'
            }
          >
            <RiLockPasswordFill size={23} />
          </div>
          <input
            type={isVisible ? 'text' : 'password'}
            value={password}
            placeholder='Enter Password'
            className='app-input-field'
            onChange={onChange}
            id='password'
            required
            onFocus={() => handleFocus(true, 'password')}
            onBlur={() => handleFocus(false, 'password')}
          />
          <div
            className={
              focus.type === 'password' && focus.selected
                ? 'right-icon right-icon-focus'
                : 'right-icon'
            }
            onClick={handleShow}
          >
            {isVisible ? (
              <AiFillEyeInvisible size={23} />
            ) : (
              <AiFillEye size={23} />
            )}
          </div>
        </div>
        <div className='d-flex justify-content-end mt-3'>
          <Link to={'/forgot-password'} className='forgot-password-link'>
            Forgot Password
          </Link>
        </div>
        <div className='sign-in-bar'>
          <div className='sign-in-text'>Sign In</div>
          <button className='sign-in-button' type='submit'>
            <AiFillCaretRight fill='var(--theme)' size={25} />
          </button>
        </div>
        <h5 className='mt-5 text-center'>
          Don't have account,{' '}
          <Link to={'/sign-up'} className='forgot-password-link'>
            Sign Up
          </Link>
        </h5>
      </form>
    </>
  )
}

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  isAuthenticated: state?.authReducer?.isAuthenticated
})

export default connect(mapStateToProps, { login })(SignIn)
