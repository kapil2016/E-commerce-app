import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../components/Context/CartContext';
import { useNavigate} from 'react-router-dom';


const ProfilePage = () => {
    const params = useParams()
    const userID = params.userID
    const navto = useNavigate();
    const[newPassword , setNewPassword] = useState('')
    const ctx = useContext(CartContext);
    if(userID !== ctx.idToken) return <p> Page Not Found</p>
    const updateUserPassword = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCYysnrcjF9jMpj1sFW-G2oPbN36VSNC4Y`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            password: newPassword,
            idToken: userID,
            returnSecureToken: true
          })
        });
      
        const data = await response.json();
      
        if (!response.ok) {
          throw new Error(data.error.message);
        }else{
            ctx.setIsLogedIn(false);
            ctx.setIdToken(null);
            navto('/store')
        }  
      }

  return (
    <Container>
      <Row className="mt-4">
        <Col md={4}>
          <Image src="user-image-url" thumbnail />
          <h4 className="mt-2">Username</h4>
          <p>Email: user-email</p>
          <Form onSubmit={updateUserPassword}>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e)=>setNewPassword(e.target.value)} value={newPassword} required />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-3'>
              Change Password
            </Button>
          </Form>
        </Col>
        <Col md={8}>
          <h4>My Orders</h4>
          {/* display orders from cart */}
          <h4 className="mt-4">Favorites</h4>
          {/* display favorites */}
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
