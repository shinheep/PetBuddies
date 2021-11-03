import React from 'react';

const TakeMeHome = (props) => {
    const handleTheOneButton = () => {
        console.log("Yay!")
    }

    const squad = props.takeMeHome.map((animal, index) => {
        return (
            <div key={index} className="dogCard">
                <img src={animal.url} alt='' className="pics"></img>
                <button onClick={()=>props.removeMe(index)} className="button">Not Quite the One</button>
                <button onClick={handleTheOneButton} className="button">The One!</button>
            </div>
        )
    })

    return (
        <div className="adopted">
            <h1>Adopt Me!</h1>
            <div className='adoptedSquad'>{squad}</div>
        </div>
    );
};

export default TakeMeHome;