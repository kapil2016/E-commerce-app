import React from "react";
import MovieCard from "./MovieCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

async function fetchMovie(setMovies, setIsLoading, setError) {
  try {
    setIsLoading(true);
    setError(null);
    const response = await fetch("https://swapi.dev/api/films");
    if (!response.ok) {
      throw new Error("Somthing Went Wrong");
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
  }
}

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  if (error) {
    content = <p> {`${error}`} </p>;
  }
  if (isLoading) {
    content = <p> Loading Movies </p>;
  }

  return (
    <Container>
      <Button
        onClick={() => {
          fetchMovie(setMovies, setIsLoading, setError);
        }}
      >
        Fetch Movie
      </Button>
      {content}
    </Container>
  );
};

export default MovieList;
