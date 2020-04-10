import React from 'react';
import '../App.css';
import { ListGroup, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const myStyle = {width: '50%', borderColor: "red", margin: '10px'};
function Character(props
  // {character: {name, description, thumbnail, id}}
  ) {
  const {character: {name, description, thumbnail, id}, history, isFavoriteCharacter} = props;
  const TextForButton = !isFavoriteCharacter ? <i class="far fa-heart"></i> : <i class="fas fa-heart"></i>;
  const clickHandler = !isFavoriteCharacter ? props.addCharacter : props.removeCharacter
  console.log(props)
  return (
    <ListGroup.Item onClick={() => {
      history.push(`/characters/${id}`)
    }} variant="dark">
    <div className='btnContainer'>
  <button className='btnmy' onClick={(e) => {e.stopPropagation(); clickHandler(props.character)}}>{TextForButton}</button> 
  </div>
  <Image style={myStyle} src={`${thumbnail.path}.${thumbnail.extension}`} roundedCircle/>
      <div>{name}</div>
      <div>{!description ? "no description" : description}</div>
      <Link to={`/characters/${id}`}>view info about hero</Link>
    </ListGroup.Item>
  )
}

export default Character;


 //{ 
  //!isFavoriteCharacter 
    // ? <Button onClick={(e) => {
    // e.stopPropagation()
    // clickHandler{props.character}
    // props.addCharacter(props.character)
  // }}>
  // {this.TextForButton}
  // </Button> 
  // : <Button onClick={(e) => {
  //     e.stopPropagation()
  //     props.addCharacter(props.character)}}>Remove FavoriteCharacter</Button>
    // }