import {
  OPERATION_FAILED,
  API_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../consts/actionTypes'

import {
    postDataService
} from './apis'

export function fetchingData () {
  return {
      type: API_LOADING,
  }
}

export function operationFailed (errors) {
  return {
      type: OPERATION_FAILED,
      errors
  }
}

export function logInSuccess(result) {
  return {
      type: LOGIN_SUCCESS,
      result
  }
}

export function logoutSuccess() {
  return {
      type: LOGOUT_SUCCESS,
  }
}

export function logIn(user) {
  console.log({'user': user})
  const params = {
    'user': user
  }
  return (dispatch, getState) => {
      dispatch(fetchingData())
      return postDataService('/api/users/login', params)
      .then((response) => {
          console.log('result response ------', response)
          if (!response.errors) {
            dispatch(logInSuccess(response))
          } else {
            dispatch(operationFailed(response.errors))
          }
      })
      .catch((err) => {
          console.log('-------- result  error -----', err)
          dispatch(operationFailed(err))
      })
  }
}
export function signUp(user) {
  console.log({'user': user})
  const params = {
    'user': user
  }
  return (dispatch, getState) => {
      dispatch(fetchingData())
      return postDataService('/api/users', params)
      .then((response) => {
          console.log('result response ------', response)
          if (!response.errors) {
            dispatch(logInSuccess(response))
          } else {
            dispatch(operationFailed(response.errors))
          }
      })
      .catch((err) => {
          console.log('-------- result  error -----', err)
          dispatch(operationFailed(err))
      })
  }
}
export function logOut() {
  return (dispatch, getState) => {
    dispatch(logoutSuccess())
  }
}