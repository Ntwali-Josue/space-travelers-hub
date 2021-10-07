import { useSelector } from 'react-redux';

const AllJoinedMissions = () => {
  const joinedMission = useSelector((state) => state.missions.joinedMission);

  const getJoinedMission = joinedMission.filter((mission) => mission);

  const renderJoinedMissions = getJoinedMission.map((mission) => (
    <li key={mission.mission_id} className="list-group-item">{mission.missionName}</li>
  ));

  return (
    <section>
      <h1 className="mx-5">Missions</h1>
      <ul className="list-group">
        {renderJoinedMissions}
      </ul>
    </section>
  );
};

export default AllJoinedMissions;
