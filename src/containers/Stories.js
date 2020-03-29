import React from 'react';
import '../App.css';
import { apikey, hash, api } from '../config';
import { Spinner, Form, Button } from 'react-bootstrap';
import Story from '../components/story';

class Stories extends React.Component {
  state = {
    stories: [],
    search: '',
    loader: ''
  }
  fetchStories = async(story) => {
    const query = story ? `comics=${story}&` : '';
    const loader = (query === `comics=${story}&`) 
      ? this.setState({loader: 
        'Sorry, your input doesn`t match any story'
                      }) 
      : this.setState({loader: 
        <Spinner animation="border" role="status"><span className="sr-only">Loading...</span>
        </Spinner>
                      })
    const data = await fetch(`${api}stories?${query}ts=1&apikey=${apikey}&hash=${hash}`);
    console.log(data)
    const json = await data.json();
    console.log(json)
    this.setState({
      stories: json.data.results
    })
  }
  componentDidMount() {
    this.fetchStories()
  }
  handleInputChange = (e) => {
    this.setState({
      search: e.target.value
    })  
  }
  handleStorySearch = () => {
    this.fetchStories(this.state.search)
  }
  render() {
    return (
      <div className="flex-container">
        <Form inline>
          <Form.Control type="number" onChange={this.handleInputChange} value={this.state.search} placeholder="Search"/>
          <Button type="button" variant="info" onClick={this.handleStorySearch}>Search</Button>{' '}
        </Form>
      {this.state.stories.length 
        ? this.state.stories.map(item => <Story story={item} key={item.id}/>)
      : <h5 className="load">{this.state.loader}</h5>}
      </div>
    )
  }
}

export default Stories;