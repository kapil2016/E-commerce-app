import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import HomeProduct from '../components/HomeComponent/HomeProducts';

const HomePage = () => {
 

  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1>Welcome to My Ecommerce Store</h1>
          <p>Explore our wide range of products and find the perfect fit for your needs.</p>
        </Col>
      </Row>
      <Row>
      <HomeProduct></HomeProduct>  
      <HomeProduct></HomeProduct>  
      <HomeProduct></HomeProduct>  
      </Row>
    </Container>
  );
}

export default HomePage;
