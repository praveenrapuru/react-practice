
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




function UserList(){
    const [users,setUsers] = useState([]);
    
    useEffect(() => {
        fetch('https://crudcrud.com/api/3bbbf556e4b3426fa0e90b391a338d9a/users')
           .then((res) => res.json())
           .then((data) => {
              console.log(data);
              setUsers(data)
           })
           .catch((err) => {
              console.log(err.message);
           });
    }, []);

    const handleDelete = () => {
        fetch('https://crudcrud.com/api/3bbbf556e4b3426fa0e90b391a338d9a/users/${user._id}')
    }
    
    return(
        <>  
            <h1>User List</h1>
            <ol>
                {users.map(user => (
                    <li>
                      {user.first_name} - {user.last_name} {user.Email} <Link to={`/UserList/${user._id}`}>View Full Details</Link>
                      <button onClick={handleDelete}>Delete</button>
                    </li>
                ))}

            </ol>
            <Link to='/Create'>Create new data</Link>
            
        </>
    );
}
export default UserList;
