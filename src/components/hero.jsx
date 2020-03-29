import React from 'react';
import '../App.css'
import { ListGroup, Image } from 'react-bootstrap';

const myStyle = {width: '50%', borderColor: "red", margin: '10px'};
function Character({character: {name, description, thumbnail}}) {
  // const {character: {name, description, thumbnail}} = props
  return (
    <ListGroup.Item variant="dark">
    <Image style={myStyle} src={`${thumbnail.path}.${thumbnail.extension}`} roundedCircle/>
      <div>{name}</div>
      <div>{!description ? "no description" : description}</div>
    </ListGroup.Item>
  )
}

export default Character;