import React, { Component } from 'react';
import { getNowPlaying } from "../api/themoviedb";
import MovieList from './MovieList';

class NowPlaying extends Component {
    render() {
            return (
                <MovieList getMovieList={getNowPlaying} />
            );
    }
}

export default NowPlaying;