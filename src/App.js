import React, { useState, useEffect } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Home from './components/Home';
import TakeMeHome from './components/TakeMeHome';

function App() {  
  
  const[takeMeHome, setTakeMeHome] = useState([])
  const addMe = (animal) => {
    setTakeMeHome([...takeMeHome, animal]);
  }


  return (    
    
    <div className="App">
      <nav>
        <Link to='/' className='navBar'>
        <h1>Animal Play Date</h1>
        </Link>

        <Link to='/dogs' className='navBar'>
        <h3>Dogs</h3>
        </Link>

        <Link to='/cats' className='navBar'>
        <h3>Cats</h3>
        </Link>

        <Link to='/takemehome' className='navBar'>
        <h3>Take Me Home!</h3>
        </Link>
      </nav>

      <main>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/dogs' exact render={() => <Dogs addMe={addMe}/>}/>
          <Route path='/cats' exact component={Cats}/>
          <Route path='/takemehome' exact render={() => <TakeMeHome />}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
