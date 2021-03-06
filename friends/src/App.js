import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import PrivateRoute from './components/PrivateRoute';
import UpdateFriend from './components/UpdateFriend';

function App() {
  return (
    <Router>
      <div className="App">  
            <NavBar />
            <Route exact path='/' component={Login} />
            <PrivateRoute path='/friendsList' component={FriendsList} />
            <PrivateRoute path='/addfriend' component={FriendForm} />
            <PrivateRoute path='/edit-friend' component={UpdateFriend}/>
      </div> 
    </Router>
  );
}

export default App;
