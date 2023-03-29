import React from 'react';
import MovieList from './MoviesList';

const MoviePage = () => {
    const movies = [
        {
          id: 1,
          title: 'The Shawshank Redemption',
          description:
            'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
          releaseDate: '1994',
          imageUrl:
            'https://images.unsplash.com/photo-1599077617861-e156646782da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGhlJTIwc2hhd3NoYW5rJTIwcmVkZW1wdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        },
        {
          id: 2,
          title: 'The Godfather',
          description:
            'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
          releaseDate: '1972',
          imageUrl:
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGhlJTIwZ29kZmF0aGVyJTIwcmVwbGFjZW1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        },
        {
          id: 3,
          title: 'The Dark Knight',
          description:
            'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
          releaseDate: '2008',
          imageUrl:
            'https://images.unsplash.com/photo-1599442175534-98d55e9ac950?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGhlJTIwZGFyayUyMmthaWdodHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        },
        {
          id: 4,
          title: 'The Lord of the Rings: The Fellowship of the Ring',
          description:
            'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
          releaseDate: '2001',
          imageUrl:
            'https://images.unsplash.com/photo-1604687886014-4e4d4e93bb4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRoZSUyMGxvcmQlMjBvZiUyMHRoZSUyMmZlbGxvd3NoaXJkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        }]
        
      

  return <MovieList movieList = {movies} />;
};

export default MoviePage;
