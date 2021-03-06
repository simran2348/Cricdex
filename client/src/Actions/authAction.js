import axios from 'axios'
import SetAuthToken from '../Utils/SetAuthToken'
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  LOADING
} from './types'
import { toast } from 'react-toastify'

//load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    SetAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get('api/auth')
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}

//register user
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    dispatch({
      type: LOADING
    })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify({ name, email, password })

    try {
      const res = await axios.post('api/users', body, config)

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })

      dispatch(loadUser())
      toast.success('Registration successful')
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
        type: REGISTER_FAIL
      })
    }
  }

//login user
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch({
      type: LOADING
    })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify({ email, password })

    try {
      const res = await axios.post('api/auth', body, config)

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })

      dispatch(loadUser())
      toast.success('Logged in successfully')
    } catch (err) {
      console.log(err)
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
        type: LOGIN_FAIL
      })
    }
  }

//logout //clear profile
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT
  })
}
