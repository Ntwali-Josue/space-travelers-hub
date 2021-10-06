import { useSelector } from 'react-redux';

const AllJoinedMissions = () => {
  const joinedMission = useSelector((state) => state.missions.joinedMission);

  const getJoinedMission = joinedMission.filter((mission) => mission);

  console.log(getJoinedMission);

  // eslint-disable-next-line array-callback-return
  const renderJoinedMissions = getJoinedMission.map((mission) => {
    console.log(mission.missionName);
    return (
      <ul key={mission.mission_id} className="list-group w-25 mx-5">
        <li className="list-group-item py-3">{mission.missionName}</li>
      </ul>
    );
  });

  console.log(renderJoinedMissions);
  return (
    <>
      <h1 className="mx-5">Missions</h1>
      {renderJoinedMissions}
    </>
  );
};

export default AllJoinedMissions;
