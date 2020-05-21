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
  TOGGLE_MAP_LOADING,
  SET_MAXIMUM,
} from './actions'

export function setMaximum(pageKey, maximum) {
  return {
    type: SET_MAXIMUM,
    payload: {
      pageKey,
      maximum
    }
  }
}

export function toggleMapLoading({pageKey}) {
  return {
    type: TOGGLE_MAP_LOADING,
    payload: {
      pageKey,
    }
  }
}
