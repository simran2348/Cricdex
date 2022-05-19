import React from 'react'
import PropTypes from 'prop-types'

function AuthButton({ align, icon, label, type, onClick }) {
  const start = align === 'start'
  const center = align === 'center'
  const end = align === 'end'

  return (
    <div
      className={`auth-bar ${start && 'justify-content-start'} ${
        center && 'justify-content-center'
      } ${end && 'justify-content-end'}`}
    >
      <button className='auth-button' type={type} onClick={onClick}>
        {label}
        {icon}
      </button>
    </div>
  )
}

AuthButton.defaultProps = {
  align: 'center',
  type: 'button',
  onClick: () => {}
}

AuthButton.propTypes = {
  align: PropTypes.string.isRequired,
  icon: PropTypes.element,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default AuthButton
