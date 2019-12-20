import React from 'react';
import { withRouter } from 'react-router-dom';

const FriendCard = (props) => {

    const editFriend = event => {
        event.preventDefault();
        props.history.push(`/edit-friend/${props.match.params.id}`)
    };
      
    return (    
        <div className="card-cont">
            <div class="card" style={{width:'18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Name: {props.name}</h5>
                    <h5 class="card-subtitle mb-2 text-muted">Age: {props.age}</h5>
                    <p class="card-text">Email: {props.email}</p>
                    <button onClick={editFriend} class="btn btn-primary">Edit</button>
                    <button class="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    )
};

export default withRouter(FriendCard);
