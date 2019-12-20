import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFriend = {
    id: Date.now(),
    name: '',
    age: null,
    email: ''
}

const UpdateFriend = (props) => {
    const [friend, setFriend] = useState(initialFriend);

    useEffect(() => {
        const friendToEdit = props.friends.find(
            j => `${j.id}` === props.match.params.id,
        );
        if (friendToEdit) {
            setFriend(friendToEdit);
        }
    }, [props.friends, props.match.params.id])

    const handleChange = event => {
        event.persist();
        setFriend({...friend, [event.target.name]: event.target.value })
    }

    const submitForm = event => {
        event.preventDefault();
        axiosWithAuth()
            .put(`http://localhost:5000/api/friends/${friend.id}`)
            .then(res => {
                props.setFriend(res.data);
                props.history.push('/friendsList');
            })
            .catch(error => console.log(error));
    };

    return (
    <div>
      <h2>Update Friend</h2>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter Name"
          value={friend.name}
        />
        <input
          type="text"
          name="age"
          onChange={handleChange}
          placeholder="Enter Age"
          value={friend.age}
        />
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Enter Email"
          value={friend.email}
        />
        <button>Update</button>
      </form>
    </div>
    )
}

export default UpdateFriend;


