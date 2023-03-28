import { Container, Row, Col , Button } from 'react-bootstrap';
import OrderList from './OrderList';

function CartContainer(props) {
  return (
    <Container
      fluid
      className="bg-light p-3"
      style={{ position: 'fixed', top:60, right: 0, width: '30%' }}
    >
    <Button
        variant="outline-danger"
        className="float-end"
        onClick={props.onClose}
      >
        X
      </Button>
      <Row>
        <Col xs={12}>
          <h4 className="text-center mb-4">Cart</h4>
          {props.orders.length > 0 ? (
            <OrderList
              orders={props.orders}
              onRemove={props.onRemove}
              onUpdateQuantity={props.onUpdateQuantity}
            />
          ) : (
            <p className="text-center">Your cart is empty.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default CartContainer;
