import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import _ from "lodash";

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

const streamsReducer = (state = {}, action) => {
  switch (action.payload) {
    case "FETCH_STREAMS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default combineReducers({
  auth: SignInReducer,
  form: formReducer,
  streams: streamsReducer,
});
