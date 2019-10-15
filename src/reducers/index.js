import { combineReducers } from 'redux'

const initialState = {
  url: '',
  loading: false,
  error: false,
};

/**
 * Merge route into the global application state
 */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUESTED_DOG':
      return {
        url: '',
        loading: true,
        error: false,
      };
    case 'REQUESTED_DOG_SUCCEEDED':
      return {
        url: action.url,
        loading: false,
        error: false,
      };
    case 'REQUESTED_DOG_FAILED':
      return {
        url: '',
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  reducer,
})

export default rootReducer