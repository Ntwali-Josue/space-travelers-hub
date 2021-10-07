import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import rocketsReducer from '../redux/rockets/rocketsReducer';
import App from '../App';

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
        rocketList: action.payload,
        reservedRockets: [],
      }
    );
  });

  test('initial state', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText('Space Travelers Hub')).toMatchSnapshot();
  });
});
