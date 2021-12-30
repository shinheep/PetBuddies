import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import dogData from "../dogData";
import dogNames from "../dogNames";
import React, {useState} from 'react';

  
  const LearnMoreAboutMe = (props) => {
    
    const [adjObj, setAdjObj] = useState({
        name: "",
        adj1: "",
        adj2: "",
        adj3: ""
    })

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random(dogNames) * 19)
        const randomAdjective1 = Math.floor(Math.random(dogData) * 41)
        const randomAdjective2 = Math.floor(Math.random(dogData) * 41)
        const randomAdjective3 = Math.floor(Math.random(dogData) * 41)
        
        setAdjObj({
            name: dogNames[randomIndex],
            adj1: dogData[randomAdjective1],
            adj2: dogData[randomAdjective2],
            adj3: dogData[randomAdjective3]
        })
    }
    
    const popover = (
    
        <Popover id="popover-basic">
          <Popover.Header as="h3">{adjObj.name}</Popover.Header>
          <Popover.Body>
              
            <ul>
                <li>{adjObj.adj1}</li>
                <li>{adjObj.adj2}</li>
                <li>{adjObj.adj3}</li>
            </ul>
          </Popover.Body>
        </Popover>
      );

    
    return(
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <Button onClick={handleClick} className="button" variant="primary">More Info</Button>
    </OverlayTrigger>
  )};
  
export default LearnMoreAboutMe;