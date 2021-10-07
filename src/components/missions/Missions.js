// import { } from 'react-redux';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import {
  joinMission,
  leaveMission,
} from '../../redux/missions/missionsReducer';
import './Mission.css';

const Mission = (props) => {
  const {
    id, missionName, description,
  } = props;
  const dispatch = useDispatch();
  const joinedMission = useSelector((state) => state.missions.joinedMission);

  const isJoined = () => {
    const joined = joinedMission.filter((mission) => mission.id === id);
    if (joined[0] === undefined) {
      return true;
    }
    return false;
  };

  const handleJoinMission = () => {
    dispatch(joinMission({ id, missionName }));
  };

  const handleLeaveMission = () => {
    dispatch(leaveMission(joinedMission.filter((mission) => mission.id !== id)));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className="mission">Mission</th>
          <th className="desc">Description</th>
          <th className="status">Status</th>
          <th className="actions"> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="mission-names">{missionName}</td>
          <td>{description}</td>
          {isJoined() ? (
            <td className="text-center">
              {' '}
              <span className="bg-secondary rounded-pill px-2">
                NOT A MEMBER
              </span>
            </td>
          ) : (
            <td className="text-white">
              <span className="bg-info rounded-pill px-2">Active Member</span>
            </td>
          )}
          <td>
            {isJoined() ? (
              <button onClick={handleJoinMission} type="button" className="btn btn-outline-secondary">Join Mission</button>
            ) : (
              <button onClick={handleLeaveMission} type="button" className="btn btn-outline-danger">
                Leave Mission
              </button>
            )}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

Mission.propTypes = {
  id: PropTypes.string,
  missionName: PropTypes.string,
  description: PropTypes.string,
};

Mission.defaultProps = {
  id: '',
  missionName: '',
  description: '',
};

export default Mission;
