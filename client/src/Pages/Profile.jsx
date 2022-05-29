// /* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { logout } from '../Actions/authAction'
import { updateProfile } from '../Actions/profileAction'
import { connect } from 'react-redux'
import ProfileCard from '../Components/ProfileCard'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import AuthButton from '../Components/AuthButton'
import Copyright from '../Components/Copyright'
import ProfileEdit from '../Components/ProfileEdit'
import { toast } from 'react-toastify'
import LZString from 'lz-string'

function Profile({ logout, auth: { user, loading }, updateProfile }) {
  const [edit, setEdit] = useState(false)
  const [appUser, setAppUser] = useState({
    username: '',
    profileImage: null,
    id: ''
  })
  const [formData, setFormData] = useState({
    name: '',
    avatar: null
  })

  const handleEdit = () => {
    setEdit(!edit)
  }

  const getBase64 = (file) => {
    const prom = new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
    return prom
  }

  const handleChange = async (type, event) => {
    if (type === 'file') {
      const encf = await getBase64(event)
      const compressed = LZString.compressToBase64(encf)
      setFormData({
        ...formData,
        avatar: {
          media: compressed,
          avatarName: event.name,
          type: event.type
        }
      })
    } else {
      setFormData({
        ...formData,
        [event.target.id]: event.target.value
      })
    }
  }

  const handleUpdate = () => {
    const { name, avatar } = formData

    if (!name) {
      return toast.error('Username cannot be empty')
    }

    if (name === appUser.username) {
      return toast.error('New username same as current username')
    }

    const payload = {
      name,
      avatar,
      id: appUser.id
    }
    updateProfile(payload)
    console.log(payload)

    setEdit(false)
    setFormData({
      name: '',
      avatar: null
    })
  }

  useEffect(() => {
    if (user) {
      const { avatar, name, _id } = user
      const media = LZString.decompressFromBase64(avatar?.media)

      setAppUser({
        profileImage: media,
        username: name ?? 'User',
        id: _id
      })
    }
  }, [loading, user])

  const { username, profileImage } = appUser
  return (
    <>
      <ProfileCard name={username} avatar={profileImage} />
      <div className='d-flex justify-content-end mt-4'>
        {!edit && (
          <span
            className='forgot-password-link'
            onClick={() => handleEdit(true)}
          >
            Edit Details
          </span>
        )}
        {edit && (
          <span className='forgot-password-link' onClick={() => handleUpdate()}>
            Done
          </span>
        )}
      </div>
      {edit && <ProfileEdit formData={formData} handleChange={handleChange} />}
      <AuthButton
        onClick={logout}
        icon={
          <RiLogoutCircleRLine className='ms-2' fill='var(--theme)' size={25} />
        }
        label='Logout'
        type='button'
        align='center'
      />
      <Copyright />
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.authReducer
})

export default connect(mapStateToProps, { logout, updateProfile })(Profile)
