import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission } from '../../redux/missions/missionsReducer';
import Mission from './Missions';

const MissionsPage = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missionList);
  const status = useSelector((state) => state.missions.status);

  useEffect(() => {
    if (status === 'empty') {
      dispatch(fetchMission());
    }
  }, [status]);

  return (
    <div>
      {
        missions.map((mission) => (
          <Mission
            key={mission.id}
            id={mission.mission_id}
            joinStatus={{ status: false }}
            missionName={mission.mission_name}
            description={mission.description}
          />
        ))
      }
      <Mission />
    </div>
  );
};

export default MissionsPage;
