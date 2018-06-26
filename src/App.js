
import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomsList from './components/RoomsList';



// Initialize Firebase
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
    render () {
        return (
            <div className='App'>
                <main>
                    <section id="sidebar">
                        <RoomsList firebase={firebase} />
                    </section>
                    <section id="main">
                        <p>This side will contain main info</p>
                    </section>
                </main>
            </div>
        )
    }
}

export default App;
