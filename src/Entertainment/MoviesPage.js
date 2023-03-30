import React from 'react';
import MovieList from './MoviesList';
import AddMovieForm from './AddMovieForm';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

const MoviePage = () => {
  const [isFormVisibal , setIsFormVisibal] = useState(false)
        
  return (
    <>
    <Container>
    { isFormVisibal && <AddMovieForm showForm ={setIsFormVisibal}></AddMovieForm>}
    </Container>
    < MovieList showForm ={setIsFormVisibal}/>
    
    </>
  )
  
};

export default MoviePage;
