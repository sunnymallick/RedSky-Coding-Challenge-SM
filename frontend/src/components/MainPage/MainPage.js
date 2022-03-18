import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddUserModal from '../AddUser'
import EditUserModal from '../EditUser'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './MainPage.css'

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
        toast('User has been added to the list!')
    };

    const editUser = async (id, first_name, last_name, email, avatar) => {
        const res = await axios.put(`/editUserInfo/${id}`, { id, first_name, last_name, email, avatar });
        setUsers(res.data)
        toast('User has been updated!')
    }
    
    const deleteUser = async (id) => {
        const res = await axios.delete(`/deleteUser/${id}`);
        setUsers(res.data);
        toast('User has been deleted!')        
    };
    
    return (
        <div className='main-page-container'>
            <div className='add-user-button-container'>
                <AddUserModal newUser={newUser}/>
            </div>
            <div className='user-list'>
                <div className='user-list-heading'>
                    <h2>USER LIST</h2>
                </div>
                <div className='user-list-info-title'>
                    <h3>AVATAR</h3>
                    <h3 id='first-name-header'>FIRST NAME</h3>
                    <h3 id='last-name-header'>LAST NAME</h3>
                    <h3 id='email-header'>EMAIL ADDRESS</h3>
                </div>
                {users.map((user) => {
                    return (
                        <div className='user-list-container' key={user.id}>
                            <div className='user-items'>
                                <img src={user.avatar} alt='avatar' />
                                <p className='list-item'>{user.first_name}</p>    
                                <p className='list-item'>{user.last_name}</p>
                                <p className='list-item'>{user.email}</p>
                            </div>
                            <div className='user-buttons'>
                                <EditUserModal editUser={editUser} userId={user.id} users={users} />
                                <button className='edit-delete-button' onClick={() => deleteUser(user.id)}>DELETE</button>
                            </div>
                        </div>
                    )
                })}
                <ToastContainer
                    position="bottom-right"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover />
            </div>
        </div>
    )
}

export default MainPage

