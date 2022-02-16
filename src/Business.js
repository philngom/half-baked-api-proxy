export default function Business({ business }) {
  return (
    <div className='business'>
      <p>{business.name}</p>
      <img src={business.image_url}/>
    </div>
  );
}