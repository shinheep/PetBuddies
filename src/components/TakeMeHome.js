import React from 'react';
import { useState } from 'react';
import ControlledCarousel from './Carousel';

const TakeMeHome = (props) => {
    
    const [border, setBorderColor] = useState("")
    
    const handleTheOneButton = () => {
        setBorderColor("5px solid lightpink");
    }

    const squad = props.takeMeHome.map((animal, index) => {
        return (
            <div key={index} className="dogCard">
                <img style={{border}} src={animal.url} alt='' className="pics"></img>
                <button onClick={()=>props.removeMe(index)} className="button">Not Quite the One</button>
                <button onClick={handleTheOneButton} className="adopt button">The One!</button>
            </div>
        )
    })

    return (
        <div className="adopted">
            <h1>Adopt Me!</h1>

            <div className='adoptedSquad'>{squad}</div>

            {/* <ControlledCarousel /> */}

        </div>
    );
};

export default TakeMeHome;