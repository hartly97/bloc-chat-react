import React, { Component } from 'react';


class RoomList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: [],
            newRoomName: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.roomsRef = this.props.firebase.database().ref('rooms')
    }

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat( room ) });
        });
    }

    handleChange(e) {
        this.setState({ newRoomName: e.target.value })
    }


    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.newRoomName) return
        this.roomsRef.push({ name: this.state.newRoomName })
        this.setState({ newRoomName: ''})
    }


    render() {
        return (
            <div className="room-list">
                <section>
                    <h1>Rooms</h1>
                    {this.state.rooms.map((room, index) =>
                        <p key={room.key}>
                            {room.name}
                        </p>
                    )}
                </section>
                <div id="new-room">
                    <form onSubmit={ (e) => this.handleSubmit(e) }>
                        <p>Add New Room</p>
                        <label>

                            <input type="text" value={this.state.newRoomName} onChange={ (e) => this.handleChange(e) }/>
                        </label>
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>
        )
    }
}
export default RoomList;


//     render() {
//         return (
//             <section className="room-list">
//                 <h1>Room List</h1>
//                 {this.state.rooms.map((room, index) =>
//                     <div key={index}>
//                         {room.name}
//                     </div>
//                 )}
//             </section>
//         )
//     }
// }
