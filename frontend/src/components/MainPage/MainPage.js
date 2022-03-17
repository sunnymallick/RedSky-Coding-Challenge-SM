import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MainPage = () => {
    const [users, setUsers] = useState([])
    const [firstName, setFirstName] = useState('test2');
    const [lastName, setLastName] = useState('test2');
    const [email, setEmail] = useState('test@test.com');
    const [avatar, setAvatar] = useState('test');

    const getUsers = async () => {
        let userData = await axios.get('/users');
        setUsers(userData.data.data)
    }

    useEffect(() => {
        getUsers()
    }, [])


    const updateFirstName = (e) => setFirstName(e.target.value)
    const updateLastName = (e) => setLastName(e.target.value)
    const updateEmail = (e) => setEmail(e.target.value)
    const updateAvatar = (e) => setAvatar(e.target.value)

    
    const newUser = async () => {
        const res = await axios.post('/addUser', { first_name: firstName, last_name: lastName, email, avatar })
        console.log(res)
            setUsers(res.data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await newUser()
    }

    const deleteUser = async (id) => {
        const res = await axios.delete(`/deleteUser/${id}`);
        setUsers(res.data);        
    }
    
    return (
        <>
            <h1>This is the user's list page</h1>
            <div className='user-list'>
            <form onSubmit={handleSubmit}>
            <input
                className='form-input'
                type='text'
                placeholder='First Name'
                value={firstName}
                onChange={updateFirstName}
                required />
            <input
                className='form-input'
                type='text'
                placeholder='Last Name'
                value={lastName}
                onChange={updateLastName}
                required />
            <input 
                className='form-input'
                type='email'
                placeholder='Email Address'
                value={email}
                onChange={updateEmail}
                required />
            <input
                className='form-input'
                type='text'
                placeholder='Avatar Link'
                value={avatar}
                onChange={updateAvatar}
                required />
            <input type='submit' />
        </form>
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

