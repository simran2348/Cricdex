import { Divider } from '../Components/Divider'
import { Facebook, Google } from '../Components/Icons'
import ScreenSize from '../Utility/Responsive'
import React, { useState } from 'react'

export const Login = () => {
  const size = ScreenSize()
  const isSmallScreen = size.width <= 450
  const [userMail, setUserMail] = useState('')
  const [password, setPassword] = useState('')

  const handleValues = (value, type) => {
    if (type === 'userMail') setUserMail(value)
    if (type === 'password') setPassword(value)
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
          <div className='logsin_title'>LOGIN</div>
        </div>
        <div className='login_container'>
          <div className='container_image h-100 w-100' />
          <form
            id='has-scrollbar'
            className='position-relative y_scroll text-center px-4 logsin_form'
          >
            <div className='form-floating'>
              <input
                type='text'
                className='form-control logsin_input input_focus'
                placeholder='Enter Email or Username'
                value={userMail}
                onChange={(e) => handleValues(e.target.value, 'userMail')}
              />
              <label className='logsin_input_label'>
                Username/Email address
              </label>
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
            <button
              type='submit'
              className='w-50 btn btn-primary mt-5 shadow-none'
              onClick={(e) => e.preventDefault()}
            >
              LOGIN
            </button>
            <Divider
              text='OR'
              margin='1.5rem'
              textMargin='0 10px'
              size={0.7}
              bold
              color='var(--text)'
              width='45%'
              height={1}
            />
            <div
              className={
                isSmallScreen ? 'd-block' : 'd-flex justify-content-around'
              }
            >
              <div>
                <button
                  className='btn btn-social btn_facebook'
                  onClick={(e) => e.preventDefault()}
                >
                  <Facebook
                    size='18'
                    color='var(--svg-regular-white)'
                    className='me-2'
                  />
                  <span className='social_title'>FACEBOOK</span>
                </button>
              </div>
              <div className={isSmallScreen ? 'mt-3' : ''}>
                <button
                  className='btn btn-social btn_google'
                  onClick={(e) => e.preventDefault()}
                >
                  <Google
                    size='18'
                    color='var(--svg-regular-white)'
                    className='me-2'
                  />
                  <span className='social_title'>GOOGLE</span>
                </button>
              </div>
            </div>
            <div className='mt-5'>
              New to CricDex,{' '}
              <a href='#/SignUp' className='text-underline'>
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
