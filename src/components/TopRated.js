import React, { Component } from 'react';
import { getTopRated } from "../api/themoviedb";
import MovieList from './MovieList';

class TopRated extends Component {
    render() {
            return (
                <MovieList getMovieList={getTopRated} />
            );
    }
}

export default TopRated;