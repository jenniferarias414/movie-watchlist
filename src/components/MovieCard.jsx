import React from 'react';

const MovieCard = ({movie, addMovie, watchList}) => {
    
    return (
        <div className='movie-card'>
            <div>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                <h3 key={movie.original_title}>{movie.original_title}</h3>
            </div>
            <button onClick={() => addMovie(movie)}>Add to list</button>
        </div>
    );
};

export default MovieCard;