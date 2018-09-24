import React, { Component } from 'react';
import { getDetail, getBigImageUrl } from "../api/themoviedb";
import './MovieDetail.css';

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
                return (
                    <div className="movieDetailContainer">
                        <div className="movieDetail">
                            <div style={{height: "600px", overflow: 'hidden', marginBottom: "20px"}}>
                                <img className="backdrop" src={getBigImageUrl(movie.backdrop_path)} alt={`${movie.title} backdrop`} />
                            </div>
                            <p className="movie-detail-title">{movie.title}</p>
                            <p className="movie-detail-overview">{movie.overview}</p>
                        </div>
                    </div>
                )
            } else {
                return null
            }
        }
    }
}

export default MovieDetail;