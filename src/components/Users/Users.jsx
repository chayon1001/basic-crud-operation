import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUser = useLoaderData();

    const [user, setUser]= useState(loadedUser)

    const handleDelete = _id =>{
        console.log('delete', _id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount> 0 ){
                alert('deleted successfully')

                const remainingUser = user.filter(use => use._id !== _id)
                setUser(remainingUser)
            }
        })
    }
    return (
        <div>
            <h3>{user.length}</h3>

            <div>
                {
                    user.map(use => <p key={use._id}>{use.name} : {use.email} 
                    <Link to={`/update/${use._id}`}>
                        <button>Update</button>
                    </Link>
                     <button onClick={()=> handleDelete (use._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;