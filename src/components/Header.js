import { Navbar, Container, Nav , Button } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from './Context/CartContext';
import { Link } from 'react-router-dom';

function Header() {
   const ctx = useContext(CartContext); 
   const orderlist = ctx.orderList ;
   const signIn = ctx.isLogedIn;
   let cartItemCount = 0 ;
   orderlist.forEach(item => {
       cartItemCount += item.quantity
   });

   const loginLogoutHandler = ()=>{
    if(ctx.isLogedIn){
      localStorage.setItem('idToken' , '')
      ctx.setIsLogedIn(false);
      ctx.setIdToken(null);
      ctx.setOrderList([]);
    }else{
      ctx.setSignInModalVisibility(true);
    }
   }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">My Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/store" className="nav-link">Store</Link>
            <Link to="/movies" className="nav-link">Entertainment</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </Nav>
          <Nav>
          {ctx.isLogedIn && <Link to={`/user/${ctx.idToken}`} className="nav-link"> My Profile </Link>}
          </Nav>
          <Nav>
            <Button variant="outline-warning" onClick={loginLogoutHandler} style={{ marginRight: "1rem" }}>{`${signIn? 'Logout' : 'Login'}`}</Button>
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
