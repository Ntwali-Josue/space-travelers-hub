// import { } from 'react-redux';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import {
  joinMission,
  leaveMission,
} from '../../redux/missions/missionsReducer';
import './Mission.css';

const Mission = (props) => {
  const {
    id, joinStatus, missionName, description,
  } = props;
  const dispatch = useDispatch();
  const joinedMission = useSelector((state) => state.missions.joinedMission);

  const handleJoinMission = () => {
    if (joinStatus.status === false) {
      joinStatus.status = true;
      dispatch(joinMission({ id, missionName }));
    }
  };

  const handleLeaveMission = () => {
    if (joinStatus.status === true) {
      joinStatus.status = false;
      dispatch(
        leaveMission(joinedMission.filter((mission) => mission.id !== id)),
      );
    }
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
          {joinStatus.status === false ? (
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
            {joinStatus.status === false ? (
              <Button onClick={handleJoinMission}>Join Mission</Button>
            ) : (
              <Button onClick={handleLeaveMission} className="bg-danger">
                Leave Mission
              </Button>
            )}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

Mission.propTypes = {
  id: PropTypes.string,
  joinStatus: PropTypes.shape(),
  missionName: PropTypes.string,
  description: PropTypes.string,
};

Mission.defaultProps = {
  id: '',
  joinStatus: { status: false },
  missionName: '',
  description: '',
};

export default Mission;
