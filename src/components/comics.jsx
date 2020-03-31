import React from 'react';
import '../App.css'
import { ListGroup, Image, Accordion, Card } from 'react-bootstrap';

const myStyle = {width: '50%', borderColor: "red", margin: '10px'};
function Comics(props
  // {character: {name, description, thumbnail, id}}
  ) {
  const {character: {name, description, thumbnail, comics, stories}, history} = props;
  
  const list = comics.items;
  console.log(list)
  return (
    <div>
      <ListGroup.Item variant="dark">
        <Image style={myStyle} src={`${thumbnail.path}.${thumbnail.extension}`} roundedCircle/>
        <div>{name}</div>
        <div>{!description ? "no description" : description}</div>
     </ListGroup.Item>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h2>Here you can see some comics with me</h2>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ListGroup>
                {comics.items.map(function(item) {
                  return (
                    <div>
                      <ListGroup.Item variant="dark">
                        {item.name}<br/>
                        {item.resourceURI}
                      </ListGroup.Item>
                    </div>
                  )
                })}
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h2>Here you can see some stories with me</h2>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ListGroup>
                {stories.items.map(function(item) {
                  return (
                    <div>
                      <ListGroup.Item variant="dark">
                        {item.name}<br/>
                        {item.resourceURI}<br/>
                        {item.type}
                      </ListGroup.Item>
                    </div>
                  )
                })}
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default Comics;