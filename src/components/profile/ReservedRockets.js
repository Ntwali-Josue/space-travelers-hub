import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  const reservedRockets = useSelector((state) => state.rockets.reservedRockets);
  const mapReservedRockets = reservedRockets.map((rocket) => (
    <li key={rocket.id} className="list-group-item">{rocket.name}</li>
  ));

  return (
    <section>
      <h1 className="mx-5">Rockets</h1>
      <ul className="list-group">
        {mapReservedRockets}
      </ul>
    </section>
  );
};

export default ReservedRockets;
