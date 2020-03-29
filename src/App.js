import React from 'react';
import Characters from "./containers/Characters";
import Stories from "./containers/Stories";
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
    </Navigation>
  <Switch>
    <Route path='/characters'>
      <Characters />
    </Route>
    <Route path='/stories'>
      <Stories/>
    </Route>
    <Route path='/'>
      <Main/>
    </Route>
  </Switch>
  </div>
  )
}
export default App;