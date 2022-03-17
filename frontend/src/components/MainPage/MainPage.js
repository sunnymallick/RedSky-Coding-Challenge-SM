import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddUserModal from '../AddUser'
import EditUserModal from '../EditUser'
import { toast, toastContainer } from 'react-toastify'

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
        const res = await axios.post('/addUser', { first_name, last_name, email, avatar });
        setUsers(res.data)
    };

    const editUser = async (id, first_name, last_name, email, avatar) => {
        const res = await axios.put(`/editUserInfo/${id}`, { id, first_name, last_name, email, avatar });
        setUsers(res.data)
    }
    
    const deleteUser = async (id) => {
        const res = await axios.delete(`/deleteUser/${id}`);
        setUsers(res.data);
        toast('User has been deleted!')        
    };
    
    return (
        <>
            <AddUserModal newUser={newUser}/>
            <div className='user-list'>
                {users.map((user) => {
                    return (
                        <div className='user-list-container' key={user.id}>
                            <h2>{user.first_name} {user.last_name}</h2>
                            <EditUserModal editUser={editUser} userId={user.id} users={users} />
                            <button onClick={() => deleteUser(user.id)}>DELETE</button>
                        </div>
                    )
                })}
            </div>
        </>
    )

}

export default MainPage

