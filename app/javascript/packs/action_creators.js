// Example:
//
// import {
//   CLEAR_FORM_ERRORS
// } from './actions'
//
// export function clearFormErrors(pageKey) {
//   return {
//     type: CLEAR_FORM_ERRORS,
//     payload: {
//       pageKey,
//     }
//   }
// }
import {
  SHOW_LOADING,
  HIDE_LOADING,
  SET_MAXIMUM,
} from './actions'

export function showLoading({pageKey}) {
  return {
    type: SHOW_LOADING,
    payload: {
      pageKey,
    }
  }
}

export function hideLoading({pageKey}) {
  return {
    type: HIDE_LOADING,
    payload: {
      pageKey,
    }
  }
}

export function setMaximum(pageKey, maximum) {
  return {
    type: SET_MAXIMUM,
    payload: {
      pageKey,
      maximum
    }
  }
}
