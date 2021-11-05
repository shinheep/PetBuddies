import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import catData from "../catData";
import catNames from "../catName";
import React, {useState} from 'react';

  
  const CatLearnMoreAboutMe = () => {
    
    const [adjObj, setAdjObj] = useState({
        name: "",
        adj1: "",
        adj2: "",
        adj3: ""
    })

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random(catNames) * 18)
        const randomAdjective1 = Math.floor(Math.random(catData) * 29)
        const randomAdjective2 = Math.floor(Math.random(catData) * 29)
        const randomAdjective3 = Math.floor(Math.random(catData) * 29)
        
        setAdjObj({
            name: catNames[randomIndex],
            adj1: catData[randomAdjective1],
            adj2: catData[randomAdjective2],
            adj3: catData[randomAdjective3]
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
      <Button onClick={handleClick} className="button" variant="primary">Learn More About Me!</Button>
    </OverlayTrigger>
  )};
  
export default CatLearnMoreAboutMe;