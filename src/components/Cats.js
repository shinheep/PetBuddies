import React, {useState, useEffect} from 'react';

const Cats = (props) => {
    const [cats, setCats] = useState()
  
    const makeApiCall = () => {
      return (
        fetch ('https://api.thecatapi.com/v1/images/search?limit=30&page=3&order=desc?api_key=07b26afd-c760-43a7-b8f9-31834f6d598d')
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
          <div className="catCard">
          <img src={cat.url} key={index} className="pics" alt=''/>
          <button onClick={()=>props.addMe(cat)} className="button">Adopt Me!</button>
          </div>
        )
      })
    
    return (
        <div className="catSection">
            <div>{catImages}</div>

        </div>
    );
};

export default Cats;