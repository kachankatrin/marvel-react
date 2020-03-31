import React from 'react';
import '../App.css';
import { ListGroup, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const myStyle = {width: '50%', borderColor: "red", margin: '10px'};
function Character(props
  // {character: {name, description, thumbnail, id}}
  ) {
  const {character: {name, description, thumbnail, id}, history} = props;
  console.log(props)
  return (
    <ListGroup.Item onClick={() => history.push(`/characters/${id}`)} variant="dark">
    <Image style={myStyle} src={`${thumbnail.path}.${thumbnail.extension}`} roundedCircle/>
      <div>{name}</div>
      <div>{!description ? "no description" : description}</div>
      <Link to={`/characters/${id}`}>view info about hero</Link>
    </ListGroup.Item>
  )
}

export default Character;