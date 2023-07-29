import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Update(){
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('https://crudcrud.com/api/95dff517c849461c99d368c372d1953a/users', {
         method: 'PUT',
         body: JSON.stringify(data),
         headers: {
            'Content-type': 'application/json',
         },
      })
         .then((res) => res.json())
         .then((post) => {
            // setData((prevData) => [post, ...prevData]);
            navigate('/UserList');
         })
         .catch((err) => {
            console.log(err.message);
         });
   };
    
    return(
        <>
            
        </>

    );
}
export default Update;