import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function MyForm(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
  }

  return (
    <div className="my-4 mx-auto" style={{ maxWidth: '600px' }}>
      <Card className="p-3">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formReleaseDate">
              <Form.Label>Release Date</Form.Label>
              <Form.Control type="date" placeholder="Enter release date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formImageUrl">
              <Form.Label>Image Url</Form.Label>
              <Form.Control type="text" placeholder="Enter image url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            </Form.Group>

            <div className="d-grid gap-2 mt-3">
              <Button variant="primary" type="submit">
                Add Movie
              </Button>
            </div>
          </Form>
          <div className="d-grid gap-2 mt-3">
              <Button variant="primary" type="submit" onClick={()=>props.showForm(false)}>
                Cancle
              </Button>
            </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyForm;
