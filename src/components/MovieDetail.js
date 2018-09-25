import React, { Component } from 'react';
import { getDetail, getBigImageUrl } from "../api/themoviedb";
import './MovieDetail.scss';

class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: undefined,
            notFound: false,
        };
    }

    componentDidMount() {
        getDetail(this.props.match.params.id)
        .then( response => {
            if(response.status_code)
                this.setState({notFound: true}); 
            else
                this.setState({movie: response});
        })
    }

    render() {
        const { movie, notFound } = this.state;
        if(notFound){
            return (
                <div style={{display: "flex", justifyContent:'center', alignItems: 'center'}}>404 Not Found</div>
            )
        } else {
            if(movie){
                console.log(movie)
                return (
                    <div className="movie-detail-container">
                        <div className="backdrop-container">
                            <img className="backdrop" src={getBigImageUrl(movie.backdrop_path)} alt={`${movie.title} backdrop`} />
                        </div>
                        <p className="movie-detail-title">{movie.title}</p>
                        { movie.overview.length > 0 &&
                        <div className="movie-detail-overview-container">
                            <p className="movie-detail-category-title">Synopsis :</p>
                            <p className="movie-detail-overview">{movie.overview}</p>
                        </div>
                        }
                        { movie.genres.length > 0 &&
                        <div className="movie-detail-overview-container">
                            <p className="movie-detail-category-title">Genres :</p>
                            <p className="movie-detail-overview">{
                                movie.genres.map((item, index) => {
                                    if(index !== movie.genres.length - 1){
                                        return item.name + ", "
                                    } else {
                                        return item.name
                                    }
                                })
                            }</p>
                        </div>}
                    </div>
                )
            } else {
                return null
            }
        }
    }
}

export default MovieDetail;