import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddUserModal from '../AddUser'

const MainPage = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        let userData = await axios.get('/users');
        setUsers(userData.data.data)
    };

    useEffect(() => {
        getUsers()
    }, [])

    const newUser = async (first_name, last_name, email, avatar) => {
        const res = await axios.post('/addUser', { first_name, last_name, email, avatar })
            setUsers(res.data)
    };

    
    const deleteUser = async (id) => {
        const res = await axios.delete(`/deleteUser/${id}`);
        setUsers(res.data);        
    };
    
    return (
        <>
            <AddUserModal newUser={newUser}/>
            <div className='user-list'>
                {users.map((user) => {
                    return (
                        <>
                            <h2>{user.first_name} {user.last_name}</h2>
                            <button onClick={() => deleteUser(user.id)}>DELETE</button>
                        </>
                    )
                })}
            </div>
        </>
    )

}

export default MainPage

