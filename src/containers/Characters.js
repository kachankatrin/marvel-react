import React from 'react';
import '../App.css';
import { Spinner, Form, Button } from 'react-bootstrap';

import { apikey, hash, api } from '../config';
import Character from '../components/hero';
// `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=a5ad07ccc6d4352713dbf416e1920b8f&hash=7838a1ee890993844dc4fe4b3a65aa2d`;
class MainCharacters extends React.Component {
  state = {
    characters: [],
    search: '',
    loader: ''
  };
  componentDidMount() {
    this.fetchCharacters()
  }
  fetchCharacters = async (character) => {
    const query = character ? `nameStartsWith=${character}&` : '';
    const loader = (query === `nameStartsWith=${character}&`) ? this.setState({loader: 'Sorry, your input doesn`t match any character'}) : this.setState({loader: <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>})
    const data = await fetch(`${api}characters?${query}ts=1&apikey=${apikey}&hash=${hash}`);
    const json = await data.json();
    console.log(json.data.results)
    
    this.setState({
      characters: json.data.results
    })
    console.log(this.state.characters)
  }
handleCharacterSearch = () => {
  this.fetchCharacters(this.state.search)
  
}
handleInputChange = (e) => {
  this.setState({
    search: e.target.value
  })  
}

  render() {
  return (
    <div className="flex-container">
    <Form inline>
    <Form.Control onChange={this.handleInputChange} value={this.state.search} placeholder="Search"/>
    <Button type="button" variant="info" onClick={this.handleCharacterSearch}>Search</Button>{' '}
    </Form>
    {this.state.characters.length 
      ? this.state.characters.map(item => <Character character={item} key={item.id}/>)
      : <h5 className="load">{this.state.loader}</h5>}   
      
    </div>
  );
  }
}
// function App1() {
//   return (
//     <div></div>
//   )
// }

export default MainCharacters;
