import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketsReducer';
import Rocket from './Rocket';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rocketList);
  const status = useSelector((state) => state.rockets.status);

  useEffect(() => {
    if (status === 'empty') {
      dispatch(fetchRockets());
    }
  }, [status]);

  const mapRockets = rockets.map(
    (rocket) => (
      <Rocket
        key={rocket.id}
        id={rocket.rocket_id}
        imgURL={`${rocket.flickr_images[1]}`}
        name={rocket.rocket_name}
        description={rocket.description}
      />
    ),
  );

  return (
    <section>
      {mapRockets}
    </section>
  );
};

export default RocketsPage;
