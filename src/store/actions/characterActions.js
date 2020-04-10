export function addCharacter(character) {
  console.log("ADD_CHARACTER", character)
  return {
    type: 'ADD CHARACTER',
    payload: character
  }
}

export function removeCharacter(character) {
  console.log('REMOVE CHARACTER', character.id)
  return {
    type: 'REMOVE CHARACTER',
    payload: character.id
  }
}