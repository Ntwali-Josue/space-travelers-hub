import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import rocketsReducer from '../redux/rockets/rocketsReducer';
import RocketsPage from '../components/rockets/RocketsPage';

describe('Rockets reducer', () => {
  test('initial state', () => {
    expect(rocketsReducer(undefined, {})).toEqual(
      {
        status: 'empty',
        rocketList: [],
        reservedRockets: [],
      }
    );
  });

  test('fetch rockets', () => {
    const initialState = {
      status: 'empty',
      rocketList: [],
      reservedRockets: [],
    };

    const action = {
      type: 'spaceX/rockets/FETCH_ROCKETS/fulfilled',
      payload: [{ name: 'Falcon 1'}, { name: 'Falcon 9'}],
    };

    expect(rocketsReducer(initialState, action)).toEqual(
      {
        status: 'fetched',
        rocketList: [{ name: 'Falcon 1'}, { name: 'Falcon 9'}],
        reservedRockets: [],
      }
    );
  });

  // test('initial state', () => {
  //   render(
  //     <Provider store={store}>
  //       <RocketsPage />
  //     </Provider>
  //   );
  //   expect(screen.getByText('section')).toMatchSnapshot();
  // });
});
