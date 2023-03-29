import React from 'react';
import MovieCard from './MovieCard';
import { Container, Row , Col, Button } from 'react-bootstrap';
import { useState } from 'react';

async function fetchMovie(setMovies , setIsLoading){
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films')
    const data = await response.json()
    const movies = data.results.map((item)=>{
        return {id:item.release_date , title: item.title , description : item.opening_crawl, releaseDate:item.release_date , imageUrl:'https://xyz'}
    })
    setMovies(movies);
    setIsLoading(false);
}

const MovieList = (props) => {
  const [movies , setMovies] = useState([])
  const[isLoading , setIsLoading] = useState(null);

  let loadingState = '';
   if(isLoading){
    loadingState = <p> Loading Movies  </p>
   }
 

  return (
    <Container>
    <Button onClick={()=>{fetchMovie(setMovies, setIsLoading)}}>Fetch Movie </Button>
    {loadingState}
    <Row className="row">
      {movies.map((movie) => (
        <Col className="col-md-6" key={movie.id}>
          <MovieCard movie = {movie} />
        </Col>
      ))}
    </Row >
    </Container>
  );
};

export default MovieList;
