import Header from "./components/Header";
import ProductCard from "./components/Layout/ProductCard";
import { Container, Row, Col } from 'react-bootstrap';

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

const productsList = productsArr.map((product)=>{
 return <Col key={product.url}> <ProductCard item = {product} ></ProductCard></Col>
})

function App() {
  return (
    <>
      <Header></Header>
      <Container>
      <Row>
      {productsList}
      </Row>
      </Container>
    </>
  );
}

export default App;
