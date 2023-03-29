import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = (props) => {
  const { title, description, releaseDate, imageUrl } = props.movie;

  return (
    <Card style={{margin: '10px auto'}}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Release Date: {releaseDate}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
