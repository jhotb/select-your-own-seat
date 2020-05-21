// Example:
//
// import {
//   CLEAR_FORM_ERRORS
// } from './actions'
// import produce from "immer"
//
// export default function (state = {}, action) {
//   switch(action.type) {
//   case CLEAR_FORM_ERRORS: {
//     const {pageKey} = action.payload
//
//     return produce(state, draft => {
//       const currentPage = draft[pageKey]
//       delete currentPage.errors
//     })
//   }
//   default:
//     return state
//   }
// }
import {
  TOGGLE_MAP_LOADING,
  SET_MAXIMUM
} from './actions'
import produce from "immer"

export default function (state = {}, action) {
  switch(action.type) {
  case SET_MAXIMUM: {
    const {
      pageKey,
      maximum
    } = action.payload

    return produce(state, draft => {
      draft[pageKey].data.seatingMap.maximum = maximum
    })
  }
  case TOGGLE_MAP_LOADING: {
    const {pageKey} = action.payload

    return produce(state, draft => {
      const { seatingMap } = draft[pageKey].data
      seatingMap.loading = !seatingMap.loading
    })
  }
  default:
    return state
  }
}
