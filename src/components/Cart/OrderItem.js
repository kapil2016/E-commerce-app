import { Button, Col, Image, Row } from 'react-bootstrap';

function OrderItem(props) {
  return (
    <Row className="my-3">
      <Col xs={3}>
        <Image src={props.imageSrc} fluid />
      </Col>
      <Col xs={9}>
        <h5>{props.title}</h5>
        <p className="my-1">${props.price}</p>
        <div className="d-flex align-items-center my-2">
          <input
            type="number"
            min="1"
            className="form-control me-2"
            value={props.quantity}
            onChange={(event) =>
              props.onUpdateQuantity(event.target.value, props.id)
            }
          />
          <Button variant="outline-danger" onClick={props.onRemove}>
            Remove
          </Button>
        </div>
      </Col>
    </Row>
  );
}

export default OrderItem;
