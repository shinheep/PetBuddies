import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import LearnMoreAboutMe from './PopoverButton';

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
      const doggyImages = dogs && dogs.map((dog, index,)=> {
        return (
          // <div key={index} className="dogCard">
          //   <img src={dog.url} key={index} alt='' className="pics"/>
          //   <button onClick={()=>props.addMe(dog)} className="button">Adopt Me!</button>
          // </div>

          <>
          <Card className='card' style={{ width: '23rem' }}>
          <Card.Img className="dogPic" variant="top" src={dog.url} />
          <Card.Body className='cardButtons'>
            <LearnMoreAboutMe />
            <Button className="adopt button" onClick={()=>props.addMe(dog)} variant="primary">Adopt Me!</Button>
          </Card.Body>
          </Card>
          </>
        )
      })
    return (
        <div className="dogSection">
            
              <div className='doggy'>{doggyImages}</div>



        </div>
    );
};

export default Dogs;