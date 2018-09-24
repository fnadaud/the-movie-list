import React, { Component } from 'react';
import Movie from './Movie';
import './MovieList.css';

class MovieList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          page: 1,
          list: [],
        };
        this.totalPages =  1;
        this.clickable = true;
      }

    componentDidMount() {
        this.updateList();
    }

    updateList = async (page = this.state.page) => {
        const response = await this.props.getMovieList(page);
        const list = response.results;
        this.totalPages = response.total_pages;
        const charLimit = 400;
        list.forEach(movie => {
            if(movie.overview.length > charLimit){
                movie.shortOverview = movie.overview.slice(0, charLimit);
                movie.shortOverview += '...';
            } else {
                movie.shortOverview = movie.overview;
            }
        });
        this.setState({ list });
    }

    render() {
            return (
                <div className="listContainer">
                { this.state.list.map( (movie, index) => <Movie movie={movie} key={`movie${index}`}/>) }
                </div>
            );
    }
}

export default MovieList;