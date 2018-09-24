import React, { Component } from 'react';
import { getPopular } from "../api/themoviedb";
import MovieList from './MovieList';

class Popular extends Component {
    render() {
            return (
                <MovieList getMovieList={getPopular} />
            );
    }
}

export default Popular;