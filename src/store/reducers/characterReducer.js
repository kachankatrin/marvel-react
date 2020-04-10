const initialStore = {
  favoriteCharacters: []
}
export const character = (initialState = initialStore, action) => {
  console.log("INITIAL", [...initialState.favoriteCharacters])
  if(action.type === 'ADD CHARACTER') {
    return {
      favoriteCharacters: [...initialState.favoriteCharacters, action.payload]
    }
  }
  if(action.type === 'REMOVE CHARACTER') {
    console.log(action.payload, 'acPayl')
    console.log(action.payload)
    return {
      favoriteCharacters: initialState.favoriteCharacters.filter((data) => {
      console.log(data.id, 'daata');
      console.log(initialState.favoriteCharacters, 'isFavCharINNNNNNN')
      return data.id !== action.payload})
    }
  }
  return initialState
}

// export const characterRemove = (initialState = initialStore, action) => {
//   if(action.type === 'REMOVE CHARACTER') {
//     return {
//       favoriteCharacters: [initialState.favoriteCharacters, action.payload]
//     }
//   }
//   return initialState;
// }