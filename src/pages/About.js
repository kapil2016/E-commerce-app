import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import CartContext from '../components/Context/CartContext';
import { useContext } from 'react';
import CartContainer from '../components/Cart/CartConatiner';

const AboutPage = () => {
  const ctx = useContext(CartContext)
  return (
    <>
    <Header></Header>
    <Container>
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, enim eget blandit commodo, quam risus lobortis massa, in pharetra nisi risus sed felis. Donec interdum tellus sed nisl iaculis, vitae bibendum enim laoreet. Etiam malesuada vel velit in feugiat. Vestibulum quis feugiat neque. Duis porta consequat purus id semper. Fusce ut ante suscipit, bibendum sapien sed, molestie sapien. Sed commodo, leo ac pulvinar pellentesque, mauris tortor consectetur justo, vel eleifend odio urna nec est.</p>
        </Col>
      </Row>
    </Container>
    {ctx.cartVisibility && <CartContainer></CartContainer>}
    </>
  );
};

export default AboutPage;
