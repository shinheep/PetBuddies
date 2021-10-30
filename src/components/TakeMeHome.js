import React from 'react';

const TakeMeHome = (props) => {
    console.log(props)

    const squad = props.takeMeHome.map((animal, index) => {
        return (
            <div className="squad">
                <img src={animal.url} alt='' className="pics"></img>
                <button onClick={()=>props.removeMe(index)}>Not Today</button>
            </div>
        )
    })

    return (
        <div className="adopted">
            <h1>Adopt Me!</h1>
            {squad}
        </div>
    );
};

export default TakeMeHome;