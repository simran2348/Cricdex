import React, { useState } from 'react'
import { MdAlternateEmail } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'
import { RiLockPasswordFill } from 'react-icons/ri'
import { AiFillEyeInvisible, AiFillEye, AiFillCaretRight } from 'react-icons/ai'
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../Actions/authAction'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import FormInput from '../Components/FormInput'

function SignUp({ isAuthenticated, register }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPass: ''
  })
  const [isPassVisible, setIsPassVisible] = useState(false)
  const [isConfVisible, setIsConfVisible] = useState(false)
  const [focus, setFocus] = useState({
    type: '',
    selected: false
  })

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPass) {
      toast.error('Password does not match')
    } else {
      register({ name, email, password })
    }
  }

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleShow = (type) => {
    if (type === 'password') {
      setIsPassVisible((prev) => !prev)
    } else {
      setIsConfVisible((prev) => !prev)
    }
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

  const { name, email, password, confirmPass } = formData

  return (
    <>
      <h2 className='greeting-title m-0'>Welcome to Cricdex,</h2>
      <form onSubmit={onSubmit} className='mt-4 d-flex flex-column'>
        <div className='app-form-group'>
          <div
            className={
              focus.type === 'name' && focus.selected
                ? 'left-icon left-icon-focus'
                : 'left-icon'
            }
          >
            <BsFillPersonFill size={23} />
          </div>
          <FormInput
            type={'text'}
            value={name}
            placeholder='Enter your name'
            onChange={onChange}
            id='name'
            onFocus={() => handleFocus(true, 'name')}
            onBlur={() => handleFocus(false, 'name')}
          />
        </div>
        <div className='app-form-group mt-4'>
          <div
            className={
              focus.type === 'email' && focus.selected
                ? 'left-icon left-icon-focus'
                : 'left-icon'
            }
          >
            <MdAlternateEmail size={23} />
          </div>
          <FormInput
            type={'email'}
            value={email}
            placeholder='Enter your email'
            onChange={onChange}
            id='email'
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
          <FormInput
            type={isPassVisible ? 'text' : 'password'}
            value={password}
            placeholder='Enter Password'
            onChange={onChange}
            id='password'
            onFocus={() => handleFocus(true, 'password')}
            onBlur={() => handleFocus(false, 'password')}
          />
          <div
            className={
              focus.type === 'password' && focus.selected
                ? 'right-icon right-icon-focus'
                : 'right-icon'
            }
            onClick={() => handleShow('password')}
          >
            {isPassVisible ? (
              <AiFillEyeInvisible size={23} />
            ) : (
              <AiFillEye size={23} />
            )}
          </div>
        </div>
        <div className='app-form-group mt-4'>
          <div
            className={
              focus.type === 'confirm' && focus.selected
                ? 'left-icon left-icon-focus'
                : 'left-icon'
            }
          >
            <RiLockPasswordFill size={23} />
          </div>
          <FormInput
            type={isConfVisible ? 'text' : 'password'}
            value={confirmPass}
            placeholder='Confirm Password'
            onChange={onChange}
            id='confirmPass'
            onFocus={() => handleFocus(true, 'confirm')}
            onBlur={() => handleFocus(false, 'confirm')}
          />
          <div
            className={
              focus.type === 'confirm' && focus.selected
                ? 'right-icon right-icon-focus'
                : 'right-icon'
            }
            onClick={() => handleShow('confirm')}
          >
            {isConfVisible ? (
              <AiFillEyeInvisible size={23} />
            ) : (
              <AiFillEye size={23} />
            )}
          </div>
        </div>
        <div className='auth-bar'>
          <button className='auth-button' type='submit'>
            SignUp
            <AiFillCaretRight className='ms-2' fill='var(--theme)' size={25} />
          </button>
        </div>
        <h5 className='mt-5 text-center'>
          Already have account,{' '}
          <Link to={'/sign-in'} className='forgot-password-link'>
            Sign In
          </Link>
        </h5>
      </form>
    </>
  )
}

SignUp.propTypes = {
  register: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  isAuthenticated: state?.authReducer?.isAuthenticated
})

export default connect(mapStateToProps, { register })(SignUp)
