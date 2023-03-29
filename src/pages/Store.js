import ProductCard from "../components/Layout/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import CartContext from "../components/Context/CartContext";
import { useContext} from "react";

function StorePage() {
  const ctx = useContext(CartContext)
  const productsArr  = ctx.productsList
  const productsList = productsArr.map((product) => {
    return (
      <Col key={product.url} className="col-md-3" >
        <ProductCard item={product}></ProductCard>
      </Col>
    );
  });

  return (
    <>
      <Container>
        <Row className="row">{productsList}</Row>
      </Container>
    </>
  );
}

export default StorePage;
