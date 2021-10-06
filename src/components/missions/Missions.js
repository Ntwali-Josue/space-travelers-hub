// import { } from 'react-redux';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import {
  joinMission,
  leaveMission,
} from '../../redux/missions/missionsReducer';

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
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{missionName}</td>
          <td>{description}</td>
          <td>Not a member</td>
          <td>
            {joinStatus.status === false
              ? <Button onClick={handleJoinMission}>Join Mission</Button>
              : <Button onClick={handleLeaveMission}>Leave Mission</Button>}
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
