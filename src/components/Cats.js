import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import CatLearnMoreAboutMe from './CatPopover';

const Cats = (props) => {
    const [cats, setCats] = useState()
  
    const makeApiCall = () => {
      return (
        fetch ('https://api.thecatapi.com/v1/images/search?limit=100&page=3&order=desc?api_key=07b26afd-c760-43a7-b8f9-31834f6d598d')
        .then((response)=>response.json())
        .then((data)=>setCats(data))
      )
    }
  
    useEffect(()=>{
      makeApiCall()
      }, [])
  
    //   console.log(cats)
  
      const catImages = cats && cats.map((cat, index)=> {
        return (
          <>
          <Card className='card' style={{ width: '23rem' }}>
          <Card.Img className="catPic" variant="top" src={cat.url} />
          <Card.Body className='cardButtons'>
            <CatLearnMoreAboutMe/>
            <Button className='adopt button' onClick={()=>props.addMe(cat)} variant="primary">Adopt Me!</Button>
          </Card.Body>
          </Card>
          </>
        )
      })
    
    return (
        <div className="catSection">
            <div className='kitty'>{catImages}</div>

        </div>
    );
};

export default Cats;