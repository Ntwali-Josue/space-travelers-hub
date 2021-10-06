// import { } from 'react-redux';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import {
  joinMisssion,
  leaveMission,
} from '../../redux/missions/missionsReducer';

const Mission = (props) => {
  const {
    id, joinStatus, missionName, description,
  } = props;
  const dispatch = useDispatch();
  const joinMission = useSelector((state) => state.missions.joinMission);

  const handleJoinMission = () => {
    if (joinStatus.status === false) {
      joinStatus.status = true;
      dispatch(joinMisssion({ id, missionName }));
    }
  };

  const handleLeaveMission = () => {
    if (joinStatus.status === true) {
      joinStatus.status = false;
      dispatch(
        leaveMission(joinMission.filter((mission) => mission.id !== id)),
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
            <Button
              onClick={
                joinStatus.status === false
                  ? handleJoinMission()
                  : handleLeaveMission()
              }
            >
              {joinStatus.status === false
                ? 'Join Mission'
                : 'Leave mission'}
            </Button>
            ;
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

Mission.propTypes = {
  id: PropTypes.string,
  joinStatus: PropTypes.string,
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
