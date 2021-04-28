import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'


export default class MovieShowcase extends Component {
  // map over your movieData array and return an array of the correct JSX
  generateMovieCards = () => {
    
    return movieData.map((movie, index) => // creates an array from data.js with the value as movie and the index
        <MovieCard  ///movie is the obj MovieCard is
        key = {index}
        title = {movie.title} // these are the keys, and their values are connected to the movie object within data.js/movieData
        poster = {movie.poster} // also, the key refers to this.props.poster in the child component
        genres = {movie.genres} 
        IMDBRating = {movie.IMDBRating}/>
        
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()} 
      </div>
    )
  }
}
