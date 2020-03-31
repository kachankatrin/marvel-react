import React from 'react';
import '../App.css';
import { apikey, hash, api } from '../config';
import {Button, Jumbotron, Container} from 'react-bootstrap';
import Comics from '../components/comics';
// import Comics from '../components/comics';
class CharacterInfo extends React.Component {
  state = {
    characters: [],
    character: null
  }
  async componentDidMount() {
    console.log('mount finish')
    const data = await fetch(`${api}characters/${this.props.match.params.id}?ts=1&apikey=${apikey}&hash=${hash}`);
    const json = await data.json();
    console.log(json)
    this.setState({
      character: json.data.results[0],
      characters: json.data.results
    })
  }
  // handleGoBack = () => {
  //   this.props.history.goBack()
  // }
  render(){
    console.log(this.props, 'props')
    const {character} = this.state;
    const {characters} = this.state;
    console.log('rendering')
    return (
      <div>
       <Jumbotron className="charInfo">
        <Container>
        <Button className="btn-back" onClick={this.props.history.goBack} variant="info">Go Back</Button>
        <h2 className="greet">Hello I am a &nbsp;
        {character && (character.name + character.description)}</h2>
        {characters.length 
          ? characters.map(item => <Comics character={item} key={item.id} history={this.props.history}/>) : 'No characters'}
        </Container>
       </Jumbotron>
      </div>
    )
  }
}

export default CharacterInfo;