// import { createAsyncThunk } from '@reduxjs/toolkit';
// import fetchAPI from '../fetchAPI';

const FETCH_ROCKETS = 'spaceX/rockets/FETCH_ROCKETS/';

const initialState = [];

export const fetchRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default rocketsReducer;
