import React, { Component } from 'react';
import Movie from './Movie';
import './MovieList.css';

import { CHAR_LIMIT_XS, CHAR_LIMIT_S, CHAR_LIMIT_M, CHAR_LIMIT_LG } from '../utils/constants'

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
        this.defineCharLimit();
        this.updateList();
        window.addEventListener('resize', this.handleResize);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    defineCharLimit = () => {
        if(window.matchMedia("(max-width: 360px)").matches)
        this.charLimit = CHAR_LIMIT_XS;
      else if (window.matchMedia("(max-width: 460px)").matches)
        this.charLimit = CHAR_LIMIT_S;
      else if (window.matchMedia("(max-width: 640px)").matches)
        this.charLimit = CHAR_LIMIT_M;
      else
        this.charLimit = CHAR_LIMIT_LG;
    }

    handleResize = () => {
        this.defineCharLimit();
        this.updateOverview();
    }

    updateList = async (page = this.state.page) => {
        const response = await this.props.getMovieList(page);
        const list = response.results;
        this.totalPages = response.total_pages;
        this.updateOverview(list);
    }

    updateOverview = (list, ) => {
        if(!list)
            list = this.state.list;
        list.forEach(movie => {
            if(movie.overview.length > this.charLimit){
                movie.shortOverview = movie.overview.slice(0, this.charLimit);
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