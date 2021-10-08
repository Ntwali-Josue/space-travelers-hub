import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelRocket } from '../../redux/rockets/rocketsReducer';
import './Rocket.css';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const rocketList = useSelector((state) => state.rockets.rocketList);
  const {
    id,
    reserved,
    imgURL,
    name,
    description,
  } = props;

  const updateReservation = (value = false) => {
    const returnReserveRocket = rocketList.map((rocket) => {
      if (rocket.rocket_id !== id) {
        return rocket;
      }
      return { ...rocket, reserved: value };
    });
    return returnReserveRocket;
  };

  const handleReservation = () => {
    dispatch(reserveRocket(updateReservation(true)));
  };

  const handleCancellation = () => {
    dispatch(cancelRocket(updateReservation()));
  };

  const reserveButton = () => (
    <input
      type="button"
      value="Reserve Rocket"
      className="btn btn-primary"
      onClick={handleReservation}
    />
  );

  const cancelButton = () => (
    <input
      type="button"
      value="Cancel Reservation"
      className="btn btn-light border text-secondary"
      onClick={handleCancellation}
    />
  );

  return (
    <div className="container-sm m-auto d-flex justify-content-between pt-4">
      <img src={imgURL} alt="rocket" className="img-fluid rocket-img" />
      <div className="ps-4">
        <h2>{name}</h2>
        <p>
          {reserved && <span className="reserved">Reserved</span>}
          {description}
        </p>
        {reserved ? cancelButton() : reserveButton()}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string,
  reserved: PropTypes.bool,
  imgURL: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

Rocket.defaultProps = {
  id: '',
  reserved: false,
  imgURL: '',
  name: '',
  description: '',
};

export default Rocket;
