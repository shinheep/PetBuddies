import React, { useState, useEffect } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Home from './components/Home';
import PetCare from './components/PetCare';
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
        
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Pet Buddies</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/dogs">Dogs</Link>
              <Link className="nav-link" to="/cats">Cats</Link>
              <Link className="nav-link" to="/petcare">Pet Care</Link>
              <Link className="nav-link" to="/takemehome">Take Me Home</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <main>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/dogs' exact render={() => <Dogs addMe={addMe}/>}/>
          <Route path='/cats' exact render={() => <Cats addMe={addMe}/>}/>
          <Route path='/petcare' exact component={PetCare}/>
          <Route path='/takemehome' exact render={() => <TakeMeHome takeMeHome={takeMeHome} removeMe={removeMe}/>}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;