import Header from "./components/Header";
import ProductCard from "./components/Layout/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import CartContainer from "./components/Cart/CartConatiner";
const orders = [
  { id: 1,
    title: "Colors",
    price: 100,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  { id:2,
    title: "Black and white Colors",
    price: 50,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  { id:3,
    title: "Yellow and Black Colors",
    price: 70,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const productsList = productsArr.map((product) => {
  return (
    <Col key={product.url}>
      {" "}
      <ProductCard item={product}></ProductCard>
    </Col>
  );
});

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Row>{productsList}</Row>
      </Container>
      <CartContainer orders ={orders}></CartContainer>
    </>
  );
}

export default App;
