import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';




function User(){
    const params = useParams();

    const [user , setUser] = useState({});
    
    useEffect(() => {
        fetch('https://crudcrud.com/api/95dff517c849461c99d368c372d1953a/users/' + params.user_id)
           .then((res) => res.json())
           .then((data) => {
              console.log(data);
              setUser(data)
           })
           .catch((err) => {
              console.log(err.message);
           });
    }, []);
    
    return(
        <>
            <div>
                <h1>Single User List</h1>
                <label>First Name:</label> {user.first_name}
                <label>Last Name:</label> {user.last_name}
                <label>Email Name:</label> {user.email}
            </div>
        </>
    );
}

export default User;