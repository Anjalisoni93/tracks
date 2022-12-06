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

export const { Provider, Context } = createDataContext(
  authReducer,
  {},
  { isSiggnedIn: false }
);