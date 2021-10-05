import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelRocket } from '../../redux/rockets/rocketsReducer';
import './Rocket.css';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const reservedRockets = useSelector((state) => state.rockets.reservedRockets);
  const {
    id,
    reservation,
    imgURL,
    name,
    description,
  } = props;

  const handleReservation = () => {
    if (reservation.status === false) {
      reservation.status = true;
      dispatch(reserveRocket({ id, name }));
    }
  };

  const handleCancellation = () => {
    if (reservation.status === true) {
      reservation.status = false;
      dispatch(cancelRocket(reservedRockets.filter((rocket) => rocket.id !== id)));
    }
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
          {reservation.status === true && <span className="reserved">Reserved</span>}
          {description}
        </p>
        {reservation.status === false ? reserveButton() : cancelButton()}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string,
  reservation: PropTypes.shape(),
  imgURL: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

Rocket.defaultProps = {
  id: '',
  reservation: { status: false },
  imgURL: '',
  name: '',
  description: '',
};

export default Rocket;
