import PropTypes from 'prop-types'
export const Modal = (props) => {
  const { modalID, modalIcon, modalMessage, modalButtons } = props

  const buttonPanel = modalButtons.map((item, index) => {
    return (
      <button
        key={index}
        type='button'
        className={item.class}
        data-bs-dismiss='modal'
        onClick={(e) => item.clickFunction(e)}
      >
        {item.label}
      </button>
    )
  })

  return (
    <div
      className='modal fade'
      id={modalID}
      data-bs-keyboard='false'
      tabIndex='-1'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-body'>
            <div className='modal_header'>{modalIcon}</div>
            <div>{modalMessage}</div>
            <div className='mt-4 d-flex justify-content-end'>{buttonPanel}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  modalID: PropTypes.string,
  modalIcon: PropTypes.object,
  modalMessage: PropTypes.string,
  modalButtons: PropTypes.array
}
