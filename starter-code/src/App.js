import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// new imports
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Beers from './components/Beers2';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import axios from 'axios';


class App extends Component {
  state = {
    allBeers: [],
    ready: false
  }

  getAllTheBeers = () => {
      axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        // console.log(response.data)
        this.setState({
          allBeers: response.data,
          ready: false
        })
      })
      .catch(err => console.log(err))   
  }

  render() {
    return (
      <div>

        {this.getAllTheBeers()}

        <Switch>
          <Route exact path="/" render={props => 
            <HomePage
            {...props}
            />}
          />
          <Route exact path="/all-beers" render={props => 
            <Beers
            {...props}
            allBeers={this.state.allBeers}
            ready={this.state.ready}
            />}
          />
          <Route 
          exact 
          path="/random" 
          render={props => 
          <RandomBeer/>}
          />
          <Route 
          exact 
          path="/new" 
          render={props => 
          <NewBeer/>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
