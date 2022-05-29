import { useState } from 'react'
import FormInput from '../Components/FormInput'
import { BsFillPersonFill } from 'react-icons/bs'

function ProfileEdit({ formData: { name, avatar }, handleChange }) {
  const [focus, setFocus] = useState({
    type: '',
    selected: false
  })

  const handleFocus = (value, type) => {
    setFocus({
      ...focus,
      type: type,
      selected: value
    })
  }

  const handleImageSelect = () => {
    let input = document.createElement('input')
    input.type = 'file'
    input.accept = '.jpg,.png,.jpeg'
    input.onchange = (_) => {
      let files = Array.from(input.files)
      handleChange('file', files[0])
    }
    input.id = 'avatar'
    input.click()
  }

  return (
    <>
      <form className='mt-4'>
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
            placeholder='Enter new username'
            onChange={(event) => handleChange(event.target.type, event)}
            id='name'
            onFocus={() => handleFocus(true, 'name')}
            onBlur={() => handleFocus(false, 'name')}
            maxLength='10'
          />
        </div>
        <div className='mt-2'>
          <div className='app-input-field d-flex justify-content-start align-items-center'>
            <button
              className='upload-button mx-2'
              type='button'
              onClick={() => handleImageSelect()}
            >
              Choose file
            </button>
            <div className='app-input-placeholder'>
              {avatar?.avatarName ?? 'No files choosen'}
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default ProfileEdit
