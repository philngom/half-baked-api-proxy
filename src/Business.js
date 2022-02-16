export default function Business({ business }) {
  return (
    <div>
      <p>{business.name}</p>
      <img src={business.image_url}/>
    </div>
  );
}