import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom'
import { Home, NowPlaying, Popular, TopRated, MovieDetail } from './components';
import logo from './assets/header.png';
import './App.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

import { STICKY_DEFAULT, STICKY_UNDER_460 } from './utils/constants'

// class Home extends Component {

//   render() {
//     return (
//       <p>
//         Page d'accueil
//       </p>
//     )
//   }
// }

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      menu: ''
    }
    this.header = React.createRef();
    this.handleResize();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  handleScroll = () => {
    if (window.pageYOffset > this.sticky) {
      this.header.current.classList.add("sticky");
    } else {
      this.header.current.classList.remove("sticky");
    }
  }

  handleResize = () => {
    if(window.matchMedia("(max-width: 460px)").matches)
      this.sticky = STICKY_UNDER_460;
    else
      this.sticky = STICKY_DEFAULT;
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
            <Link to='/' className="App-logo">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
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
