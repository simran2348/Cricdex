import React, { useState } from 'react'
import { BackArrow } from '../Components/Icons'

export const SignUp = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleValues = (value, type) => {
    if (type === 'firstName') setFirstName(value)
    if (type === 'lastName') setLastName(value)
    if (type === 'userName') setUserName(value)
    if (type === 'email') setEmail(value)
    if (type === 'password') setPassword(value)
    if (type === 'confirmPassword') setConfirmPassword(value)
  }

  return (
    <div
      className='app_body'
      style={{ backgroundColor: 'var(--logsin-background)' }}
    >
      <div
        id='has-scrollbar'
        className='logsin_background y_scroll w-100 h-100 pb-3'
      >
        <div className='logsin_title_container'>
          <div onClick={() => props.history.push('/Login')}>
            <BackArrow
              size='40'
              className='signup_back'
              color='var(--svg-regular-white)'
            />
          </div>
          <div className='logsin_title'>SIGNUP</div>
        </div>
        <div className='signup_container'>
          <div className='container_image h-100 w-100' />
          <form
            id='has-scrollbar'
            className='position-relative y_scroll text-center px-4 pb-2 logsin_form'
          >
            <div className='form-floating'>
              <input
                type='text'
                className='form-control logsin_input input_focus'
                placeholder='Enter First Name'
                value={firstName}
                onChange={(e) => handleValues(e.target.value, 'firstName')}
              />
              <label className='logsin_input_label'>First Name</label>
            </div>
            <div className='form-floating mt-4'>
              <input
                type='text'
                className='form-control mt-1 logsin_input input_focus'
                placeholder='Enter Last Name'
                value={lastName}
                onChange={(e) => handleValues(e.target.value, 'lastName')}
              />
              <label className='logsin_input_label'>Last Name</label>
            </div>
            <div className='form-floating mt-4'>
              <input
                type='text'
                className='form-control mt-1 logsin_input input_focus'
                placeholder='Enter Your Username'
                value={userName}
                onChange={(e) => handleValues(e.target.value, 'userName')}
              />
              <label className='logsin_input_label'>Username</label>
            </div>
            <div className='form-floating mt-4'>
              <input
                type='email'
                className='form-control mt-1 logsin_input input_focus'
                placeholder='Enter Your Email'
                value={email}
                onChange={(e) => handleValues(e.target.value, 'email')}
              />
              <label className='logsin_input_label'>Email</label>
            </div>
            <div className='form-floating mt-4'>
              <input
                type='password'
                className='form-control mt-1 logsin_input input_focus'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => handleValues(e.target.value, 'password')}
              />
              <label className='logsin_input_label'>Password</label>
            </div>
            <div className='form-floating mt-4'>
              <input
                type='password'
                className='form-control mt-1 logsin_input input_focus'
                placeholder='Confirm Your Password'
                value={confirmPassword}
                onChange={(e) =>
                  handleValues(e.target.value, 'confirmPassword')
                }
              />
              <label className='logsin_input_label'>Confirm Password</label>
            </div>
            <button
              type='submit'
              className='w-50 btn btn-primary mt-5 shadow-none'
              onClick={(e) => e.preventDefault()}
            >
              SIGNUP
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
