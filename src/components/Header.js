import { Navbar, Container, Nav , Button } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from './Context/CartContext';
import { Link } from 'react-router-dom';

function Header() {
   const ctx = useContext(CartContext); 
   const orderlist = ctx.orderList ;
   let cartItemCount = 0 ;
   orderlist.forEach(item => {
       cartItemCount += item.quantity
   });
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">My Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/" className="nav-link">Store</Link>
            <Link to="/about" className="nav-link">About</Link>
          </Nav>
          <Nav>
            <Button variant="outline-warning" onClick={()=>ctx.setCartVisibility(!ctx.cartVisibility)} >{`My Cart ${cartItemCount}`}</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
