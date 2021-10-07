import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import missionsReducer from '../redux/missions/missionsReducer';
import fetchAPI from '../redux/fetchAPI';
import Mission from '../components/missions/Missions';

describe('Mission reducer', () => {
  test('initial state', () => {
    expect(missionsReducer(undefined, {})).toEqual(
      {
        status: 'empty',
        missionList: [],
        joinedMission: [],
      },
    );
  });

  test('fetch mission action', () => {
    const initialState = {
      status: 'empty',
      missionList: [],
      joinedMission: [],
    };

    const action = {
      type: 'spaceX/missions/FETCH_MISSIONS/fulfilled',
      payload: [{ name: 'Thaicom' }, { name: 'Iridium NEXT' }],
    };

    expect(missionsReducer(initialState, action)).toEqual(
      {
        status: 'fetched',
        missionList: action.payload,
        joinedMission: [],
      },
    );
  });

  test('render missions', async () => {
    const missionList = await fetchAPI('https://api.spacexdata.com/v3/missions');
    const mapMissions = missionList.map(
      (mission) => (
        <Mission
          key={mission.mission_id}
          id={mission.mission_id}
          missionName={mission.mission_name}
          description={mission.description}
        />
      ),
    );
    render(
      <Provider store={store}>
        {mapMissions}
      </Provider>,
    );
    expect(screen.getByText('Thaicom')).toMatchSnapshot();
    expect(screen.getByText('Iridium NEXT')).toMatchSnapshot();
    expect(screen.getByText('Telstar')).toMatchSnapshot();
    expect(screen.getByText('SES')).toMatchSnapshot();
  });
});
