import React from 'react';
import MovieCard from './MovieCard';

const MovieScreen = ({movieList, page, setPage, watchList, addMovie}) => {

    const movieDisplay = movieList.map((movie, index) => {
        // return <h2 key={movie.original_title}>{movie.original_title}</h2>;
        return <MovieCard addMovie={addMovie} movie={movie} watchList={watchList} />
    });

    return (
        <div className='page'>
            <h1>Jenny's Movie Theater</h1>
            <h3>Add a movie to your watchlist!</h3>
            
            <div className='movie-container'>{movieDisplay}</div>
        </div>
    );
};

export default MovieScreen;