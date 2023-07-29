
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




function UserList(){
    const [users,setUsers] = useState([]);
   

    const fetchUsers = () => {
        fetch('https://crudcrud.com/api/323882276e034ff09d067155d91ef210/users')
           .then((res) => res.json())
           .then((data) => {
              console.log(data);
              setUsers(data)
           })
           .catch((err) => {
              console.log(err.message);
           });
    }
    
    useEffect(() => {
        fetchUsers()
    }, []);

    const handleDelete = (userId) => {
        debugger
        fetch('https://crudcrud.com/api/95dff517c849461c99d368c372d1953a/users/'+ userId, {
            method: 'DELETE'
        })
        // .then(res => res.json())
    .then(data => fetchUsers())
    .catch(error => console.error(error));
    }
    
    return(
        <>  
            <h1>User List</h1>
            <ol>
                {users.map(user => (
                    <li>
                      {user.first_name} - {user.last_name} {user.Email} <Link to={`/UserList/${user._id}`}>View Full Details</Link>
                      <button><Link to='/Create'>Update</Link></button>
                      <button onClick={ () => { handleDelete(user._id) } }>Delete</button>
                      
                    </li>
                ))}

            </ol>
            <Link to='/Create'>Create new data</Link>
            
        </>
    );
}
export default UserList;
