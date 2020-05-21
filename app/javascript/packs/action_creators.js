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
} from './actions'

export function toggleMapLoading({pageKey}) {
  return {
    type: TOGGLE_MAP_LOADING,
    payload: {
      pageKey,
    }
  }
}
