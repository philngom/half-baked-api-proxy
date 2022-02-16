import Business from './Business';

export default function BusinessList({ data }) {
  return (
    <div>
      {
        data.map((business) =>
          <Business key={business.id} business={ business }/>
        )
      }

    </div>
  );
}