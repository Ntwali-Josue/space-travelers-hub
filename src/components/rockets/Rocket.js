import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelRocket } from '../../redux/rockets/rocketsReducer';
import './Rocket.css';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const reservedRockets = useSelector((state) => state.rockets.reservedRockets);
  const {
    id,
    imgURL,
    name,
    description,
  } = props;

  const isReserved = () => {
    const reservation = reservedRockets.filter((rocket) => rocket.id === id);
    if (reservation[0] === undefined) {
      return true;
    }
    return false;
  };

  const handleReservation = () => {
    dispatch(reserveRocket({ id, name }));
  };

  const handleCancellation = () => {
    dispatch(cancelRocket(reservedRockets.filter((rocket) => rocket.id !== id)));
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
          {isReserved() || <span className="reserved">Reserved</span>}
          {description}
        </p>
        {isReserved() ? reserveButton() : cancelButton()}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string,
  imgURL: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

Rocket.defaultProps = {
  id: '',
  imgURL: '',
  name: '',
  description: '',
};

export default Rocket;
