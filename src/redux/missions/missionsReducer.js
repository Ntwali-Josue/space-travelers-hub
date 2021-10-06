import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchAPI from '../fetchAPI';
// import axios from 'axios'

const FETCH_MISSIONS = 'spaceX/missions/FETCH_MISSIONS/fulfilled';
const JOIN_MISSION = 'spaceX/missions/FETCH_MISSIONS';

const initialState = {
  status: 'empty',
  missionList: [],
  joinMission: [],
};

export const fetchMission = createAsyncThunk('spaceX/missions/FETCH_MISSIONS', async () => {
  const result = await fetchAPI('https://api.spacexdata.com/v3/missions');
  return result;
});

export const joinMisssion = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return {
        status: 'fetched',
        missionList: [...state.missionList, ...action.payload],
      };
    case JOIN_MISSION:
      return {
        status: state.status,
        missionList: state.missionList,
        joinMission: [...state.joinMission, action.payload],
      };

    default:
      return state;
  }
};

export default missionsReducer;
