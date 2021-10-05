import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/rocketsReducer';
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

  const handleRocketReservation = () => {
    dispatch(reserveRocket({ id, name }));
  };

  const isReserved = reservedRockets.map(
    (rocket) => {
      if (rocket.id === id) {
        return (
          <span key={rocket.id} className="reserved">Reserved</span>
        );
      }
      return '';
    },
  );

  return (
    <div className="container-sm m-auto d-flex justify-content-between pt-4">
      <img src={imgURL} alt="rocket" className="img-fluid rocket-img" />
      <div className="ps-4">
        <h2>{name}</h2>
        <p>
          {isReserved}
          {description}
        </p>
        <input type="button" value="Reserve Rocket" className="btn btn-primary" onClick={handleRocketReservation} />
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
