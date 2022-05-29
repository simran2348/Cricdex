import axios from 'axios'
import { UPDATE_PROFILE_ERROR, LOADING } from './types'
import { loadUser } from './authAction'
import { toast } from 'react-toastify'

export const updateProfile = (payload) => async (dispatch) => {
  dispatch({
    type: LOADING
  })

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // const body = JSON.stringify(payload)

  try {
    await axios.post('api/users/update-profile', payload, config)

    dispatch(loadUser())
    toast.success('Profile updated successfully')
  } catch (err) {
    const errors = err.response.data.errors
    const serverError = err.response.status === 500

    if (serverError) {
      toast.error(err.response.data)
    }
    if (errors) {
      errors.forEach((error) => {
        toast.error(error.msg)
      })
    }
    dispatch({
      type: UPDATE_PROFILE_ERROR
    })
  }
}
