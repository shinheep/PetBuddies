import React, {useState, useEffect} from 'react';

const Dogs = (props) => {
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
          <div className="dogCard">
            <img src={dog.url} key={index} alt='' className="pics"/>
            <button onClick={()=>props.addMe(dogs)} className="button">Adopt Me!</button>
          </div>
        )
      })
    return (
        <div className="dogSection">
            {doggyImages}


        </div>
    );
};

export default Dogs;