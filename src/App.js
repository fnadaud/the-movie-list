import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import { NowPlaying, Popular, TopRated, MovieDetail } from './components';
import logo from './assets/header.png';
import './App.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

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
      search: '',
      menu: ''
    }
    this.header = React.createRef();
    this.sticky = 200;
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

  toggleMenu = () => {
    const { menu } = this.state;
    if(menu === ""){
      this.setState({ menu: "active"});
    } else {
      this.setState({ menu: ""});
    }
  }

  hideMenu = () => {
    if(this.state.menu !== ""){
      this.setState({ menu: ""});
    }
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <nav className="header-bar" ref={this.header}>
              <div className="bars-icon" onClick={this.toggleMenu}>
                <FontAwesomeIcon size="lg" icon={faBars} />
              </div>
              <div className={`links ${this.state.menu}`}>
                <NavLink to='/nowplaying' className={'link'} onClick={this.hideMenu}>À l'affiche</NavLink>
                <NavLink to='/popular' className={'link'} onClick={this.hideMenu}>Populaires</NavLink>
                <NavLink to='/toprated' className={'link'} onClick={this.hideMenu}>Les mieux notés</NavLink>
              </div>
              <div className="search-container">
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
                <input className="search-input" type="text" onChange={this.handleSearchChange} value={this.state.search} placeholder="Recherche" />
              </div>
            </nav>
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
