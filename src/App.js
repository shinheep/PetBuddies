import React, { useState, useEffect } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Home from './components/Home';

function App() {
  
  return (
    <div className="App">
      <nav>
        <Link to='/'>
        <h1>Animal Play Date</h1>
        </Link>

        <Link to='/dogs'>
        <h3>Dogs</h3>
        </Link>

        <Link to='/cats'>
        <h3>Cats</h3>
        </Link>
      </nav>

      <div className="dogSection">
        <Route path='/' exact component={Home}/>
        <Route path='/dogs' exact component={Dogs}/>
        <Route path='/cats' exact component={Cats}/>
      </div>
    </div>
  );
}

export default App;
