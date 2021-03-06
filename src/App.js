import React from 'react';
import Characters from "./containers/Characters";
import Stories from "./containers/Stories";
import CharacterInfo from "./containers/characterInfo"
import Favorite from "./containers/Favorite"
import Main from "./containers/Main"
import {Switch, Route, Link } from 'react-router-dom';
import Navigation from './components/Nav'

// const api = 'http://gateway.marvel.com/v1/public/';
function App() {
  return (
    <div>
    <Navigation>
      <Link to='/'>Main</Link>
      <Link to='/characters'>Characters</Link>
      <Link to='/stories'>Stories</Link>
      <Link to='/favorite'>Favorite hero</Link>
    </Navigation>
  <Switch>
    <Route path='/characters/' exact component={Characters}/>
    <Route path='/stories'>
      <Stories/>
    </Route>
    <Route path='/' exact component={Main}/>
    <Route path='/characters/:id' component={CharacterInfo}/>
    <Route path='/favorite' component={Favorite}/>
  </Switch>
  </div>
  )
}
export default App;