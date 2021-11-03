import { Popover, OverlayTrigger, Button } from "react-bootstrap";

const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Doggo Info</Popover.Header>
      <Popover.Body>
        <ul>
            <li>Fluffy</li>
            <li>Sweet</li>
            <li>Loves belly rubs</li>
        </ul>
      </Popover.Body>
    </Popover>
  );
  
  const LearnMoreAboutMe = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button className="button" variant="primary">Learn More About Me!</Button>
    </OverlayTrigger>
  );
  
export default LearnMoreAboutMe;