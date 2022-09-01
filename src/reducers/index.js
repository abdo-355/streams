import { combineReducers } from "redux";

const initialState = {
  user: {},
  isSignedIn: false,
};

const SignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, user: action.payload, isSignedIn: true };
    case "SIGN_OUT":
      return { ...state, user: null, isSignedIn: false };
    default:
      return state;
  }
};

export default combineReducers({ auth: SignInReducer });
