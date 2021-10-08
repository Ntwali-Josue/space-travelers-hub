// import AllJoinedMissions from './JoinedMission';
import ReservedRockets from './ReservedRockets';
import './Profile.css';

const ProfilePage = () => (
  <div className="d-flex justify-content-between profile-list">
    <p>Missions</p>
    <ReservedRockets />
  </div>
);

export default ProfilePage;
