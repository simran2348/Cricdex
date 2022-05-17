import React, { useState } from 'react'
import { MdAlternateEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { AiFillEyeInvisible, AiFillEye, AiFillCaretRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function SignIn() {
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

  const { email, passwword } = formData

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
            value={passwword}
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
            <AiFillCaretRight fill='var(--theme)' size={22} />
          </button>
        </div>
      </form>
    </>
  )
}

export default SignIn
