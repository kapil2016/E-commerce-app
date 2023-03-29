import Header from "../components/Header";
import ProductCard from "../components/Layout/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import CartContainer from "../components/Cart/CartConatiner";
import CartContext from "../components/Context/CartContext";
import { useContext} from "react";

function StorePage() {
  const ctx = useContext(CartContext)
  const productsArr  = ctx.productsList
  const productsList = productsArr.map((product) => {
    return (
      <Col key={product.url}>
        {" "}
        <ProductCard item={product}></ProductCard>
      </Col>
    );
  });


  return (
    <>
      <Header></Header>
      <Container>
        <Row>{productsList}</Row>
      </Container>
      {ctx.cartVisibility && <CartContainer></CartContainer>}
    </>
  );
}

export default StorePage;
