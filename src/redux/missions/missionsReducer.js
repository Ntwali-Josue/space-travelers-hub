// import { createAsyncThunk } from '@reduxjs/toolkit';
// import fetchAPI from '../fetchAPI';

const FETCH_MISSIONS = 'spaceX/missions/FETCH_MISSIONS/';

const initialState = [];

export const fetchMissions = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default missionsReducer;
