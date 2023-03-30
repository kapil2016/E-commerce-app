import React from "react"
const MovieContext = React.createContext(
  {
   movieList:[],
   setMovieList:()=>{}
  }
)

export default MovieContext ;