import React from "react";
import MovieCard from "./MovieCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import MovieContext from "../components/Context/MovieContext";

async function fetchMovie(setMovies, setIsLoading, setError , setRetry) {
  try {
    setIsLoading(true);
    setError(null);
    const response = await fetch("https://movie-store-20f0d-default-rtdb.firebaseio.com/movies.json");
    if (!response.ok) {
      throw new Error("Somthing Went Wrong ...Retrying");
    }
    const data = await response.json();
    const movies = [] ;
    for(let key in data){
      movies.push({id:key ,title: data[key].title , description:data[key].description , releaseDate:data[key].release_Date , imageUrl:data[key].imageUrl})
    }
    
    setMovies(movies);
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    setError(error);
    setRetry(true)
  }
}

const MovieList = (props) => {
  const ctx = useContext(MovieContext) ;
  const movies = ctx.movieList;
  const setMovies = ctx.setMovieList;
  // const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retry , setRetry] = useState(false);

  let content = <p> No Movie Found </p>;
  if (movies.length > 0) {
    content = (
      <Row className="row">
        {movies.map((movie) => (
          <Col className="col-md-4" key={movie.id}>
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
    if(retry){
    const timer = setTimeout(() => {
            fetchMovie(setMovies, setIsLoading, setError , setRetry)
            setRetry(false); 
            console.log('retrying..')
    }, 5000);
    return ()=>clearTimeout(timer)
  }
  },[retry,setMovies])

  useEffect(()=>{
    fetchMovie(setMovies, setIsLoading, setError , setRetry) 
  },[setMovies])
   

  if (isLoading) {
    content = <p> Loading Movies </p>;
  }

  return (
    <Container>
      <Button
        onClick={() => {
          fetchMovie(setMovies, setIsLoading, setError , setRetry);
        }}
        className='m-2'
      >
        Fetch Movie
      </Button>
      <Button className="m-2" onClick={()=>{props.showForm(true)}}> Add Movie</Button>

      {content}
    </Container>
  );
};

export default MovieList;
