import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchAPI from '../fetchAPI';
// import axios from 'axios'

const FETCH_MISSIONS = 'spaceX/missions/FETCH_MISSIONS/fulfilled';

const initialState = {
  status: 'empty',
  missionList: [],
};

export const fetchMission = createAsyncThunk('spaceX/missions/FETCH_MISSIONS', async () => {
  const result = await fetchAPI('https://api.spacexdata.com/v3/missions');
  return result;
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return {
        status: 'fetched',
        missionList: [...state.missionList, ...action.payload],
      };
    default:
      return state;
  }
};

export default missionsReducer;
