import React, {useState, useEffect} from 'react';

const Dogs = (props) => {
    const [dogs, setDogs] = useState()
  
    const makeApiCall = () => {
      return (
        fetch ('https://api.thedogapi.com/v1/images/search?limit=100&page=3&order=desc?api_key=07b26afd-c760-43a7-b8f9-31834f6d598d')
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
          <div key={index} className="dogCard">
            <img src={dog.url} key={index} alt='' className="pics"/>
            <button onClick={()=>props.addMe(dog)} className="button">Adopt Me!</button>
          </div>
        )
      })
    return (
        <div className="dogSection">
            <input type='text' placeholder="Search for a breed"/><input type='submit'/>
            
              <div className='doggy'>{doggyImages}</div>



        </div>
    );
};

export default Dogs;