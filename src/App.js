import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [dogs, setDogs] = useState()
  
  const makeApiCall = () => {
    return (
      fetch ('https://api.thedogapi.com/v1/images/search?limit=30&page=3&order=desc?api_key=07b26afd-c760-43a7-b8f9-31834f6d598d')
      .then((response)=>response.json())
      .then((data)=>setDogs(data))
    )
  }

  useEffect(()=>{
    makeApiCall()
    }, [])

    console.log(dogs)

    const doggyImages = dogs && dogs.map((dog, index)=> {
      return (
        <img src={dog.url} key={index} className="doggyPics" alt=''/>
      )
    })
  
  return (
    <div className="App">
      <nav>
        <h1>Doggy Date</h1>
      </nav>


      {doggyImages}
    </div>
  );
}

export default App;
