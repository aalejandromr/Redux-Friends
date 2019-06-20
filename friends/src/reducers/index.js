import { FETCHING_FRIENDS, SUCCESS_FRIENDS, FAILURE_FRIENDS } from "../actions"

const initialState = {
  friendList: [],
  isFetching: false,
  error: null,
  isLoggingIn: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return {
        ...state,
        isFetching: true
      }
    case SUCCESS_FRIENDS:
      return {
        ...state,
        isFetching: false,
        friendList: action.payload,
        error: null
      }
    case FAILURE_FRIENDS:
      return {
        ...state,
        isFetching: true,
        error: "Something went wrong"
      }
    default:
      return state
  }
}