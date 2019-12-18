import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">  
            <Route exact path='/' component={Login} />
            <PrivateRoute path='/friendsList' component={FriendsList} />
            <PrivateRoute path='/addfriend' component={FriendForm} />
      </div> 
    </Router>
  );
}

export default App;
