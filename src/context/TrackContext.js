import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {};

const createTrack = dispatch => (name, locations) => {
  console.log(name, locations.length);
};

export const { Provider, Context } = createDataContext (
  trackReducer,
  { fetchTracks, createTrack },
  []
);