import AllJoinedMissions from './JoinedMission';
import ReservedRockets from './ReservedRockets';
import './Profile.css';

const ProfilePage = () => (
  <div className="d-flex justify-content-between profile-list">
    <AllJoinedMissions />
    <ReservedRockets />
  </div>
);

export default ProfilePage;
