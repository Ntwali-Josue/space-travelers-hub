import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchAPI from '../fetchAPI';

const FETCH_ROCKETS = 'spaceX/rockets/FETCH_ROCKETS/fulfilled';
const RESERVE_ROCKET = 'spaceX/rockets/RESERVE_ROCKET';
const CANCEL_ROCKET = 'spaceX/rockets/CANCEL_ROCKET';

const initialState = {
  status: 'empty',
  rocketList: [],
};

export const fetchRockets = createAsyncThunk('spaceX/rockets/FETCH_ROCKETS', async () => {
  const response = await fetchAPI('https://api.spacexdata.com/v3/rockets');
  return response;
});

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const cancelRocket = (payload) => ({
  type: CANCEL_ROCKET,
  payload,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return {
        status: 'fetched',
        rocketList: [...state.rocketList, ...action.payload],
      };
    case RESERVE_ROCKET:
      return {
        status: state.status,
        rocketList: [...action.payload],
      };
    case CANCEL_ROCKET:
      return {
        status: state.status,
        rocketList: [...action.payload],
      };
    default:
      return state;
  }
};

export default rocketsReducer;
