import React from 'react';
import { Card , Button} from 'react-bootstrap';
import MovieContext from '../components/Context/MovieContext';
import { useContext } from 'react';
async function deleteMovie(id){
  console.log(id)
  try {
    const response = await fetch(`https://movie-store-20f0d-default-rtdb.firebaseio.com/movies/${id}.json`, {
      method: 'DELETE'
    });
    const data = await response.json();
    console.log('Delete request successful:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

const MovieCard = (props) => {
  const ctx = useContext(MovieContext)
  const {id, title, description, releaseDate, imageUrl } = props.movie;
  const deleteMovieHandler = ()=>{
    const movieList = ctx.movieList.filter((movie)=>{return movie.id !== id})
    deleteMovie(id)
    ctx.setMovieList(movieList);
  }
  

  return (
    <Card style={{margin: '10px auto'}}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Release Date: {releaseDate}</Card.Text>
        <div className="d-grid gap-2 mt-3">
              <Button variant="primary" onClick={deleteMovieHandler}>
                Delete Movie
              </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
