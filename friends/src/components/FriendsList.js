import React, {useState, useEffect} from 'react';
import FriendCard from './FriendCard';
import FriendForm from './FriendForm';
import  { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
   const [friends, setFriends] = useState([]);
   
   useEffect(() => {
        axiosWithAuth().get('/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(error => console.log(error))
    }, []);
    
    return ( 
            <div className="friends-container">  
                {friends.map(info => (
                  <FriendCard
                    key={info.id}
                    name={info.name}
                    age={info.age}
                    email={info.email}
                  />
                ))}
                <FriendForm friendsList={setFriends} />
            </div>
          );
        };

    
   

 export default FriendsList;
