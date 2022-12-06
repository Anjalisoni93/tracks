import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make API request to signup with that email and password

    // if we sign up, moify our state, ans say that we are authenticated

    // if signing up fails, we probably need to reflect an error message somewhere

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
  { isSiggnedIn: false }
);