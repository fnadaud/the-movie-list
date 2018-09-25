import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import { NowPlaying, Popular, TopRated, MovieDetail } from './components';
import logo from './assets/OffresSerli.png';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {

  render() {
    return (
      <p>
        Page d'accueil
      </p>
    )
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.header = React.createRef();
    this.sticky = 240;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > this.sticky) {
      this.header.current.classList.add("sticky");
    } else {
      this.header.current.classList.remove("sticky");
    }
  }

  handleSearchChange = (event) => {
    this.setState({
      search: event.target.value
    });
  }

  render() {
    console.log(this.state.search);
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="header-bar" style={{display: "flex", justifyContent: 'space-evenly'}} ref={this.header}>
              <div className="links">
                <NavLink to='/nowplaying' className={'link'}>À l'affiche</NavLink>
                <NavLink to='/popular' className={'link'}>Populaires</NavLink>
                <NavLink to='/toprated' className={'link'}>Les mieux notés</NavLink>
              </div>
              <div className="search-container">
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
                <input className="search-input" type="text" onChange={this.handleSearchChange} value={this.state.search} placeholder="Recherche" />
              </div>
            </div>
          </header>
          <Route exact path='/' component={Home} />
          <Route path='/nowplaying' component={NowPlaying} />
          <Route path='/popular' component={Popular} />
          <Route path='/toprated' component={TopRated} />
          <Route path='/movie/:id' component={MovieDetail} />
        </div>
    );
  }
}

export default App;
