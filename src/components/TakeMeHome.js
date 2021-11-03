import React from 'react';
import { useState } from 'react';

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

            <div className="contact">
                <div><input className='name form' placeHolder='Name' type='text'/></div>
                <div><input className='email form' placeHolder='E-mail' type='text'/></div>
                <div><input className='message form' placeHolder='Message' type='text'/></div>
                <div><input type='submit'/></div>
            </div>
        </div>
    );
};

export default TakeMeHome;