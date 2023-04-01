import React, { useState } from 'react';
import { Modal, Form, Button, Nav } from 'react-bootstrap';
import CartContext from '../Context/CartContext';
import { useContext } from 'react';

const SignUpModal = () => {
  const ctx = useContext(CartContext)  
  const show = ctx.signInModalVisibility;
  const setShow = ctx.setSignInModalVisibility;
//   const [show, setShow] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const[isLoading , setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
     setIsLoading(true);
     
     let URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYysnrcjF9jMpj1sFW-G2oPbN36VSNC4Y" ;
     if(isSignIn){
        URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCYysnrcjF9jMpj1sFW-G2oPbN36VSNC4Y'
     }

      const response = await fetch(
        URL,
        {
          method: "POST",
          body: JSON.stringify({
            email:email,
            password:password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if(data.error){
        alert(data.error.message)
        console.log(data.error.message)
      }
      console.log(data);
      setIsLoading(false);
      // User account created successfully
    
  };
  
  const handleSignIn = () => {
    setIsSignIn(true);
  };

  const handleSignUp = () => {
    setIsSignIn(false);
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Modal.Title> */}
          <Nav variant="pills" defaultActiveKey={isSignIn ? 'sign-in' : 'sign-up'}>
            <Nav.Item>
              <Nav.Link eventKey="sign-up" onClick={handleSignUp}>
                Sign Up
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sign-in" onClick={handleSignIn}>
                Sign In
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {isSignIn ? (
              <>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
              </>
            ) : (
              <>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </Form.Group>

                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                </Form.Group>
              </>
            )}

            <div className="text-center">
              <Button variant="outline-primary" type="submit" className="mt-3" style={{width:'10rem'}}>
             { `${!isLoading ? `${isSignIn ? 'Sign In' : 'Sign Up'}`: 'Configuring..' }`}
                
              </Button>
            </div>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
</Modal>
</>
);
};

export default SignUpModal;
