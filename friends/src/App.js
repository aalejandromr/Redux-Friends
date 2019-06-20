import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import FriendList from "./components/FriendComponent"
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LoginPage from "./components/LoginComponet"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <Router>
      <Link to='/login'> Log In </Link>
      <Link to='/'> View Friends </Link>
      <Route path="/login" component={LoginPage}/>
      <PrivateRoute exact path="/" component={FriendList}/>
    </Router>
  );
}

const StyledApp = styled(App)`
heigth: 100%
`

export default StyledApp;