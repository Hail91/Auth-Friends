import React  from 'react';

const FriendCard = (props) => {
      
    return (    
        <div className="card-cont">
            <div class="card" style={{width:'18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Name: {props.name}</h5>
                    <h5 class="card-subtitle mb-2 text-muted">Age: {props.age}</h5>
                    <p class="card-text">Email: {props.email}</p>
                    <button class="btn btn-primary">Edit</button>
                    <button class="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    )
};

export default FriendCard;
