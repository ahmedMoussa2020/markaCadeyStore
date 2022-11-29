import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Rating from './Rating';

 function SambusaView(props) {
  const {sambusa} = props;
  return (
    <Card >
    <Link to={`/sambusa/${sambusa.slug}`}>
      <img src={sambusa.image} className='card-img-top' alt={sambusa.name} />
    </Link>
    <Card.Body>
    <Link to={`/sambusa/${sambusa.slug}`}>
        <Card.Title>{sambusa.name}</Card.Title>
      </Link>
      <Rating rating={sambusa.rating} numReviews={sambusa.numReviews} />
      <Card.Text>${sambusa.price}</Card.Text>
      <Button>Add To Cart</Button>
    </Card.Body>
  </Card>
  )
}

export default SambusaView;