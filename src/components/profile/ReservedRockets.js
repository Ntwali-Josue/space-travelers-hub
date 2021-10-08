import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  const rocketList = useSelector((state) => state.rockets.rocketList);
  const mapReservedRockets = rocketList.map(
    (rocket) => {
      if (rocket.reserved === true) {
        return (
          <li key={rocket.rocket_id} className="list-group-item">{rocket.rocket_name}</li>
        );
      }
      return '';
    },
  );

  const noReserveRockets = () => mapReservedRockets[0] === '' && mapReservedRockets === [];

  return (
    <section>
      <ul className="list-group my-3">
        <li className="list-group-item"><h1>Rockets</h1></li>
        {noReserveRockets
          ? <li className="list-group-item"><span>No booked rockets.</span></li>
          : mapReservedRockets}
      </ul>
    </section>
  );
};

export default ReservedRockets;
