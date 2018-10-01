import React, { Component } from 'react';
import { getUpcoming, getImageUrl, getBigImageUrl } from "../api/themoviedb";
import './Home.scss';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            page: 1,
        };
    }

    componentDidMount() {
        this.updateList();
    }

    updateList = async (page = this.state.page) => {
        const response = await getUpcoming(page);
        let list = response.results;
        this.totalPages = response.total_pages;
        list = list.filter((item) => item.backdrop_path !== null)
        this.setState({
            list
        })
    }

    renderBlock = (list) => {
        let dates = []
        for(let i = 0; i< list.length; i++){
            let date = list[i].release_date.split('-');
            date = date[2] + '/' + date[1] + '/' + date[0];
            dates.push(date);
        }
        return (
            <div className="block-container" >
                <div>
                    <img className="block-backdrop-solo" src={getBigImageUrl(list[0].backdrop_path)} alt={`${list[0].title} poster`} />
                    <p className="block-big-text">{list[0].title}<br />{dates[0]}</p>
                </div>
                <div style={{display: "flex"}}>
                    <div>
                        <img className="block-backdrop" src={getImageUrl(list[1].backdrop_path)} alt={`${list[1].title} poster`} />
                        <p className="block-text">{list[1].title}<br />{dates[1]}</p>
                    </div>
                    <div>
                        <img className="block-backdrop" src={getImageUrl(list[2].backdrop_path)} alt={`${list[2].title} poster`} />
                        <p className="block-text">{list[2].title}<br />{dates[2]}</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const block1 = this.state.list.slice(0, 3);
        const block2 = this.state.list.slice(3, 6);
        const block3 = this.state.list.slice(6, 9);
        const block4 = this.state.list.slice(9, 12);
        const block5 = this.state.list.slice(12, 15);
        const block6 = this.state.list.slice(15, 18);
        return (
            <div className={'home-container'}>
                {block1.length === 3 && this.renderBlock(block1)}
                {block2.length === 3 && this.renderBlock(block2)}
                {block3.length === 3 && this.renderBlock(block3)}
                {block4.length === 3 && this.renderBlock(block4)}
                {block5.length === 3 && this.renderBlock(block5)}
                {block6.length === 3 && this.renderBlock(block6)}
            </div>
        )
    }
}

export default Home;