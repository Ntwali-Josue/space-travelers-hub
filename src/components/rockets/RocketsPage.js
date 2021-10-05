import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocket } from '../../redux/rockets/rocketsReducer';
import Rocket from './Rocket';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rocketList);
  const status = useSelector((state) => state.rockets.status);

  useEffect(() => {
    if (status === 'empty') {
      dispatch(fetchRocket());
    }
  }, [status]);

  const mapRockets = rockets.map(
    (rocket) => (
      <Rocket
        key={rocket.id}
        id={rocket.rocket_id}
        reserved={false}
        imgURL={`${rocket.flickr_images[1]}`}
        name={rocket.rocket_name}
        description={rocket.description}
      />
    ),
  );

  return (
    <section>
      {mapRockets}
      <p>.</p>
    </section>
  );
};

export default RocketsPage;
