import React from 'react';
import {connect} from 'react-redux';
import Character from '../components/hero';
import { addCharacter, removeCharacter } from '../store/actions/characterActions';


function Favorite(props) {  
  console.log(props.favoriteCharacters, 'favorite')
  return (
    <div>My Favorite Heroes
    {
      props.favoriteCharacters.map(item => 
        { console.log(item)
         return <Character  character={item}  removeCharacter={props.removeCharacter} history={props.history} isFavoriteCharacter={(props.favoriteCharacters.filter(fav => {console.log(props.favoriteCharacters, 'inside favorite'); return fav.id === item.id})).length}/>}
      )
    }
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    favoriteCharacters: state.characters.favoriteCharacters
  }
}

const mapDispatchToProps = {
  addCharacter,
  removeCharacter
}


export default connect(mapStateToProps, mapDispatchToProps)(Favorite);