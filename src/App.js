import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import NavBar from './components/NavBar';
import MissionsPage from './components/missions/MissionsPage';
import RocketsPage from './components/rockets/RocketsPage';
import ProfilePage from './components/profile/ProfilePage';
import NoMatch from './components/NoMatch';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <RocketsPage />
        </Route>
        <Route path="/missions">
          <MissionsPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
