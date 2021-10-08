import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  const rocketList = useSelector((state) => state.rockets.rocketList);
  const reservedRockets = rocketList.filter((rocket) => rocket.reserved === true);
  const mapRockets = reservedRockets.map(
    (rocket) => (
      <li key={rocket.rocket_id} className="list-group-item">
        <span>
          {rocket.rocket_name}
        </span>
      </li>
    ),
  );

  const noReservedRockets = () => (
    <li className="list-group-item">
      <span>
        No reserved rockets.
      </span>
    </li>
  );

  return (
    <section>
      <ul className="list-group my-3">
        <li className="list-group-item"><h1>Rockets</h1></li>
        {reservedRockets.length === 0
          ? noReservedRockets()
          : mapRockets}
      </ul>
    </section>
  );
};

export default ReservedRockets;
