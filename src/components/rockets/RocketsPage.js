import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketsReducer';
import Rocket from './Rocket';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rocketList = useSelector((state) => state.rockets.rocketList);
  const status = useSelector((state) => state.rockets.status);

  useEffect(() => {
    if (status === 'empty') {
      dispatch(fetchRockets());
    }
  }, [status]);

  const mapRockets = rocketList.map(
    (rocket) => (
      <Rocket
        key={rocket.rocket_id}
        id={rocket.rocket_id}
        reserved={rocket.reserved === undefined ? false : rocket.reserved}
        imgURL={`${rocket.flickr_images[0]}`}
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
