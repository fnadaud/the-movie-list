import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import { NowPlaying, Popular, TopRated, MovieDetail } from './components';
import logo from './assets/OffresSerli.png';
import './App.css';

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
      selected: ''
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

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="headerBar" style={{display: "flex", justifyContent: 'space-evenly'}} ref={this.header}>
              <div className="links">
                <NavLink to='/nowplaying' className={'link'}>À l'affiche</NavLink>
                <NavLink to='/popular' className={'link'}>Populaires</NavLink>
                <NavLink to='/toprated' className={'link'}>Les mieux notés</NavLink>
              </div>
              <div style={{display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "white", width: "200px", height: "30px", color: 'black', borderRadius: "50px", border: "solid black 2px"}}>Recherche</div>
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
