import {
  OPERATION_FAILED,
  API_LOADING,
  LOGIN_SUCCESS,
} from '../consts/actionTypes'

import {
    postDataService
} from './apis'

export function fetchingData () {
  return {
      type: API_LOADING,
  }
}

export function operationFailed (error) {
  return {
      type: OPERATION_FAILED,
      error
  }
}

export function logInSuccess(result) {
  return {
      type: LOGIN_SUCCESS,
      result
  }
}

export function logIn(user) {
  console.log({'users': user})
  return (dispatch, getState) => {
      dispatch(fetchingData())
      return postDataService('/users/login', {'user': user})
      .then((response) => {
          console.log(response)
          dispatch(logInSuccess(response))
      })
      .catch((err) => {
          dispatch(operationFailed(err))
      })
  }
}