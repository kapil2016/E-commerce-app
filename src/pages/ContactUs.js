import React, { useState } from 'react';
import { Form, Button, Card,} from 'react-bootstrap';
async function postDataToFirebase(data) {
    const response = await fetch('https://movie-store-20f0d-default-rtdb.firebaseio.com/users.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    console.log(responseData)
  }

function ContactUs() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    postDataToFirebase({name: name , phone : phone , email : email})
    setName('');
    setPhone('');
    setEmail('')
   
  }

  return (
    <div className="container mt-5">
      <Card className="p-4">
        <h1>Contact Us</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Form.Group>

          <div className="mt-3">
            <Button variant="primary" type="submit" className="mr-2">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default ContactUs;
