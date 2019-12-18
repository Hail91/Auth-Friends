import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendForm = props => {

    const [friend, addFriend] = useState({
        name: '',
        age: '',
        email: '',
        id: Date.now()
    })

    const handleChanges = event => {
        addFriend({...friend, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('/friends', friend)
            .then(res => {
                props.friendsList(res.data)
            });
    }
    
    return (
        <div className="add-form-container">
            <h2>Add new friend below!</h2>
            <form className="add-form" onSubmit={handleSubmit}>
               <input 
               className="input"
               type='text'
               name='name'
               value={friend.name}
               onChange={handleChanges}
               placeholder='Add name here'
               />
               <input
                className="input"
                type='text'
                name='age'
                value={friend.age}
                onChange={handleChanges}
                placeholder='Add age here'
               />
               <input 
               className="input"
               type='text'
               name='email'
               value={friend.email}
               onChange={handleChanges}
               placeholder='Add email here'
               />
               <button type="button" onClick={handleSubmit} className="btn btn-2 btn-primary add-btn-2">Add Friend</button>
           </form> 
        </div>
    );
};

export default FriendForm;
