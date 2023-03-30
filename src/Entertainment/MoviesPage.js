import React from 'react';
import MovieList from './MoviesList';
import AddMovieForm from './AddMovieForm';
import { Container } from 'react-bootstrap';
import MovieContext from '../components/Context/MovieContext';
import { useState } from 'react';


const MoviePage = () => {
  const [isFormVisibal , setIsFormVisibal] = useState(false)
  const[movieList , setMovieList] = useState([]);
 const ctxObj = {
  movieList : movieList,
  setMovieList: setMovieList
 }

        
  return (
    <>
    <MovieContext.Provider value ={ctxObj}>
    <Container>
    { isFormVisibal && <AddMovieForm showForm ={setIsFormVisibal}></AddMovieForm>}
    </Container>
    < MovieList showForm ={setIsFormVisibal} />
    </MovieContext.Provider>
    </>
  )
  
};

export default MoviePage;
