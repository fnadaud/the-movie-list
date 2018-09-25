import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Media } from 'react-bootstrap';
import { getImageUrl } from "../api/themoviedb";
import './Movie.css';

class Movie extends Component {

    render() {
        const { movie } = this.props;
            return (
                <div className="movieContainer">
                    <Media className="movie">
                        <Link to={`/movie/${this.props.movie.id}`} style={{textDecoration: "none", color: 'black'}} movie={movie}>
                            <Media.Left>
                                <img className="poster" src={getImageUrl(movie.poster_path)} alt={`${movie.title} poster`} />
                            </Media.Left>
                            <Media.Body className="text-container">
                                <p>{movie.title}</p>
                                <p className="overview">{movie.shortOverview}</p>
                            </Media.Body>
                        </Link>
                    </Media>
                    <div className="ratingContainer">
                        <div className="rating">{movie.vote_average * 10}%</div>
                    </div>
                </div>
            );
    }
}

export default Movie;