import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
//import User from './components/User';

// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     Container,
//     Row,
//     Col,
//     Jumbotron,
// } from 'reactstrap';

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
        super(props);

        this.state={
            activeRoom: ''
        }

        this.changeActiveRoom = this.changeActiveRoom.bind(this);
    }

    changeActiveRoom(room) {
        this.setState({ activeRoom: room })
        console.log(this.state.activeRoom)
    }


    render () {
        return (
            <div className='App'>
                <main>
                    <section id="sidebar">
                        <RoomList
                            firebase={firebase}
                            activeRoom={this.state.activeRoom}
                            changeActiveRoom={this.changeActiveRoom}
                        />
                    </section>
                    <section id="main">
                        <MessageList
                            firebase={firebase}
                            activeRoom={this.state.activeRoom}
                        />
                    </section>
                </main>
            </div>
        )
    }
}

export default App;
