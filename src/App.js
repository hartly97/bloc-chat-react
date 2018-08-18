import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';


var config = {
    apiKey: "AIzaSyBUzguapbzMPREIitzLUqfwISGrv9lncq4",
    authDomain: "bloc-chat-react-84eab.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-84eab.firebaseio.com",
    projectId: "bloc-chat-react-84eab",
    storageBucket: "bloc-chat-react-84eab.appspot.com",
    messagingSenderId: "198907327366"
};
firebase.initializeApp(config);

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        user: '',
        activeRoom: '',
        activeMessage: ''
      }
      this.setActiveRoom = this.setActiveRoom.bind(this);
      this.setMessage = this.setMessage.bind(this);
      this.setUser = this.setUser.bind(this);
    }

    setMessage(message) {
     this.setState({ activeMessage: message })
    }

    setUser(user) {
      this.setState({ user: user })
    }

    setActiveRoom(room) {
      this.setState({ activeRoom: room })
    }

  render() {
    return (
      <div className="app container-fluid">
        <h1 className="chat-header">Bloc Chat</h1>
         <User
          firebase={ firebase }
          user={this.state.user}
          setUser={(user) => this.setUser(user)}
          />
        <RoomList
          firebase={ firebase }
          setActiveRoom={ this.setActiveRoom }
          activeRoom={ this.state.activeRoom}
          />
        <MessageList
          firebase={ firebase }
          activeRoom={this.state.activeRoom}
          setActiveRoom={this.setActiveRoom}
          user={ this.state.user}
          />
      </div>
    );
  }
}

export default App;
