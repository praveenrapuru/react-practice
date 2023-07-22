import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Create(){
  const navigate = useNavigate();

    const [data, setData] = useState({
        first_name:'',
        last_name:'',
        email:''
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]:value
        }));
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('https://crudcrud.com/api/3bbbf556e4b3426fa0e90b391a338d9a/users', {
         method: 'POST',
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
            <form onSubmit={handleSubmit}>

                <label htmlFor='firstname'>first_name:
                    <input 
                    type='text'
                    id='first_name'
                    name='first_name'
                    value={data.firstname}
                    onChange={handleChange}
                    />
                </label><br/>
                <label htmlFor='lastname'>last_name:
                    <input 
                    type='text'
                    id='last_name'
                    name='last_name'
                    value={data.lastname}
                    onChange={handleChange}
                    />
                </label><br/>
                <label htmlFor='email'>Email:
                    <input 
                    type='email'
                    id='email'
                    name='email'
                    value={data.email}
                    onChange={handleChange}
                    />

                </label>
                <button type='submit'>submit</button>
            </form>
        </>

    );
}
export default Create;
