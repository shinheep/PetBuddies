import React, { useState, useEffect } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Home from './components/Home';
import TakeMeHome from './components/TakeMeHome';

function App() {  
  
  const [takeMeHome, setTakeMeHome] = useState([])
  const addMe = (animal) => {
    setTakeMeHome([...takeMeHome, animal]);
  }

  const removeMe = (indexToRemove) => {
    let newSquad = takeMeHome.filter((animally, index)=>{
      return index !==indexToRemove
    })

    setTakeMeHome(newSquad)
  }


  return (    
    
    <div className="App">
        
      <header className='header'>
        <Link to='/' className='header'>
          <h1>Pet Farm</h1>
        </Link>
      
        <nav>
          <Link to='/dogs' className='navBar'>
          <h3>Dogs</h3>
          </Link>

          <Link to='/cats' className='navBar'>
          <h3>Cats</h3>
          </Link>

          <Link to='/takemehome' className='navBar'>
          <h3>Take Me Home!</h3>
          </Link>

          <a href="#" class="hamburger"><i class="fas fa-bars"></i></a>
        </nav>

      </header>



      <main>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/dogs' exact render={() => <Dogs addMe={addMe}/>}/>
          <Route path='/cats' exact render={() => <Cats addMe={addMe}/>}/>
          <Route path='/takemehome' exact render={() => <TakeMeHome takeMeHome={takeMeHome} removeMe={removeMe}/>}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
