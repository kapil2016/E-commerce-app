import React from "react";
import MovieCard from "./MovieCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";

async function fetchMovie(setMovies, setIsLoading, setError , setRetry) {
  try {
    setIsLoading(true);
    setError(null);
    const response = await fetch("https://swapi.dev/api/film");
    if (!response.ok) {
      throw new Error("Somthing Went Wrong ...Retrying");
    }
    const data = await response.json();
    const movies = data.results.map((item) => {
      return {
        id: item.release_date,
        title: item.title,
        description: item.opening_crawl,
        releaseDate: item.release_date,
        imageUrl: "https://xyz",
      };
    });
    setMovies(movies);
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    setError(error);
    setRetry(true)
  }
}

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retry , setRetry] = useState(false);

  let content = <p> No Movie Found </p>;
  if (movies.length > 0) {
    content = (
      <Row className="row">
        {movies.map((movie) => (
          <Col className="col-md-6" key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    );
  }
  const cancelRetrying = ()=>{
    content = <p></p>
    setError(null);
    setRetry(false);
    
  }

  if (error) {
    content = <div> {`${error}`} <Button variant="outline-danger" onClick={cancelRetrying} > cancle</Button> </div>;
  }
  
  useEffect(()=>{
    const timer = setTimeout(() => {
        if(retry){
            fetchMovie(setMovies, setIsLoading, setError , setRetry)
            setRetry(false); 
            console.log('retrying..')
        }
    }, 5000);
    return ()=>clearTimeout(timer);
  },[retry])
   

  if (isLoading) {
    content = <p> Loading Movies </p>;
  }

  return (
    <Container>
      <Button
        onClick={() => {
          fetchMovie(setMovies, setIsLoading, setError , setRetry);
        }}
      >
        Fetch Movie
      </Button>
      {content}
    </Container>
  );
};

export default MovieList;
