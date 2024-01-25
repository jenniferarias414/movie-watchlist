import React from 'react';
import MovieCard from './MovieCard';

const MovieScreen = ({movieList, page, setPage, watchList, addMovie, removeMovie}) => {

    const increment = () => {
        setPage(page + 1)
    };

    const decrement = () => {
      if (page !== 1) {
        setPage(page - 1);
      }
    };

    const movieDisplay = movieList.map((movie, index) => {
        // return <h2 key={movie.original_title}>{movie.original_title}</h2>;
        return <MovieCard addMovie={addMovie} movie={movie} watchList={watchList} removeMovie={removeMovie}/>
    });

    return (
        <div className='page'>
            <h1>Jenny's Movie Theater</h1>
            <h3>Add a movie to your watchlist!</h3>
            <div className='btn-container'>
                <button onClick={decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className='movie-container'>{movieDisplay}</div>
            <div className='btn-container-bottom'>
                <button onClick={decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
        </div>
    );
};

export default MovieScreen;