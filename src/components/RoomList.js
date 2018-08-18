import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      newRoomName: ""
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat ( room ) });
    });
  }

  handleChange(e) {
    this.setState({ newRoomName: e.target.value });
  }

  createRoom(e) {
    e.preventDefault();
    if(!this.state.newRoomName) {
      return
  } else {
      this.roomsRef.push({ name: this.state.newRoomName });
  }
      this.setState({ newRoomName: ""});
  }

  deleteRoom() {
    this.roomsRef.child(this.props.activeRoom.key).remove();
    window.location.reload();
  }


render() {
  return (
    <div className="roomList">

      <h4> Current Chat Room: {this.props.activeRoom.name} </h4>
        <form onSubmit={ (e) => this.createRoom(e) }>
              <input
                className="inputBox"
                placeholder="Type roomname here"
                type="text"
                value={this.state.newRoomName}
                onChange = {(e) => this.handleChange(e)} />
              <input
               className="submitButton"
               value="New Chat Room"
               type="submit"/>
        </form>


      <ul className="room-list">
       {
         this.state.rooms.map ( (room, index) =>
          <li key={index} onClick={() => this.props.setActiveRoom(room)}  >{room.name}</li>
        )}
      </ul>

      <button
          type="button"
          onClick={()=> this.deleteRoom()}
        >
      Delete Room
      </ button>


    </div>
)
}
}

export default RoomList;
