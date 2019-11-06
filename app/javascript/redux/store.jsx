import { createStore } from 'redux'

function counter(state = 0, action) {
  switch (action.type) {
    case 'SUBMIT_FORM':
      return state + action.payload
    default:
      return state
  }
}

let store = createStore(counter)