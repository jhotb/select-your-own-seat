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
  REHYDRATE,
} from './actions'

// The applicationPageReducer is for cross page reducers
// Its common to add to this. You'll typically have to pass a pageKey to the 
// action payload to distinguish the current page
//
// The pageKey is passed through the props in your component. Access it like
// this: `this.props.pageKey` then dispatch it in an action
export const applicationPagesReducer = (state = {}, action) => {
  switch(action.type) {
  default:
    return state
  }
}

// The applicationRootReducer is for app wide reducers
// Its rare to be adding to this. Included out of the box ix a reducer for
// Redux Persist.
//
// The REHYDRATE reducer is generated by Breezy and is needed to persist state
// on any changes made to the initial state that gets injected into
// window.BREEZY_INITIAL_PAGE_STATE.
export const applicationRootReducer = (state = {}, action) => {
  switch(action.type) {
  case REHYDRATE: {
    if (action.payload) {
      const {
        pages: hydratedPages
      } = action.payload
      const { pages } = state
      const nextPages = { ...pages, ...hydratedPages }

      for (const key in pages) {
        if (pages[key] && hydratedPages[key] &&
          pages[key].renderedAt > hydratedPages[key].renderedAt) {
          nextPages[key] = { ...pages[key] }
        }
      }

      return { ...state, pages: nextPages }
    } else {
      return state
    }
  }
  default:
    return state
  }
}
