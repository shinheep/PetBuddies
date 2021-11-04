import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import dogData from "../dogData";
import React, {useState} from 'react';

  
  const LearnMoreAboutMe = (props) => {
    
    const [adjObj, setAdjObj] = useState({
        adj1: "",
        adj2: "",
        adj3: ""
    })

    const handleClick = () => {
        const randomAdjective1 = Math.floor(Math.random() * 41) +1
        const randomAdjective2 = Math.floor(Math.random() * 41) +1
        const randomAdjective3 = Math.floor(Math.random() * 41) +1
        
        setAdjObj({
            adj1: dogData[randomAdjective1],
            adj2: dogData[randomAdjective2],
            adj3: dogData[randomAdjective3]
        })
    }
    
    const popover = (
    
        <Popover id="popover-basic">
          <Popover.Header as="h3">Doggo Info</Popover.Header>
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
      <Button onClick={handleClick} className="button" variant="primary">Learn More About Me!</Button>
    </OverlayTrigger>
  )};
  
export default LearnMoreAboutMe;