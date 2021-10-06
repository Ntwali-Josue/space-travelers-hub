import { useSelector } from 'react-redux';
// import { joinMission } from '../../redux/missions/missionsReducer';

const AllJoinedMissions = () => {
  // const { joinStatus } = props;
  // const dispatch = useDispatch();
  const joinedMission = useSelector((state) => state.missions.joinedMission);
  // console.log(joinedMission[0].missionName);

  const getJoinedMission = joinedMission.filter((mission) => mission);

  console.log(getJoinedMission);

  // const displayJoinedMission = () => {
  //   for (let i = 0; i < getJoinedMission.length; i += 1) {
  //     return getJoinedMission[i].missionName;
  //   }
  //   return <h1 className="text-center">No joined mission yet</h1>;
  // };

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

// AllJoinedMissions.propTypes = {
//   joinStatus: PropTypes.shape(),
// };

// AllJoinedMissions.defaultProps = {
//   joinStatus: { status: false },
// };

export default AllJoinedMissions;
