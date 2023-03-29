import { Col , Card , Button } from "react-bootstrap"
const HomeProduct = ()=>{
    return (
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Card.Title>Product 1</Card.Title>
              <Card.Text>
                This is a description of product 1. It is a very good product and will be useful for your needs.
              </Card.Text>
              <Button variant="primary">Add to cart</Button>
            </Card.Body>
          </Card>
        </Col>
    )
}
export default HomeProduct ;