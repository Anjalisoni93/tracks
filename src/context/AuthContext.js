import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // make API request to signup with that email and password
    try {
      const response = await trackerApi.post('/signup', { email, password });
      console.log(response.data);
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
    }
  };
};

const signin = (dispatch) => {
  return ({ enail, password }) => {
    // try to signin 
    // Handle success by updating state
    // Handle failure by showing error message
  };
};

const signout = (dispatch) => {
  return () => {
    // signout
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSiggnedIn: false, errorMessage: '' }
);