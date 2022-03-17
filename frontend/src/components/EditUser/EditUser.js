import React, { useState } from 'react';
import './EditUser.css'

const EditUser = ({ editUser, setShowModal, users, userId }) => {
    const individualUser = users.find(user => user.id === userId)
    const [firstName, setFirstName] = useState(individualUser.first_name);
    const [lastName, setLastName] = useState(individualUser.last_name);
    const [email, setEmail] = useState(individualUser.email);
    const [avatar, setAvatar] = useState(individualUser.avatar);
    
    const updateFirstName = (e) => setFirstName(e.target.value)
    const updateLastName = (e) => setLastName(e.target.value)
    const updateEmail = (e) => setEmail(e.target.value)
    const updateAvatar = (e) => setAvatar(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();
        await editUser(+userId, firstName, lastName, email, avatar);
        setShowModal(false)
    }

    return (
        <>
            <div className='edit-user-container'>
                <div className='edit-user-header'>
                    <h3>EDIT USER</h3>
                </div>
            <form onSubmit={handleSubmit} className='edit-user-form'>
                <p>FIRST NAME</p>
                <input
                    className='form-input'
                    type='text'
                    placeholder='First Name'
                    value={firstName}
                    onChange={updateFirstName}
                    required />
                <p>LAST NAME</p>
                <input
                    className='form-input'
                    type='text'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={updateLastName}
                    required />
                <p>EMAIL ADDRESS</p>
                <input 
                    className='form-input'
                    type='email'
                    placeholder='Email Address'
                    value={email}
                    onChange={updateEmail}
                    required />
                <p>AVATAR IMAGE LINK</p>
                <input
                    className='form-input'
                    type='text'
                    placeholder='Avatar Link'
                    value={avatar}
                    onChange={updateAvatar}
                    required />
                <button onClick={() => {setShowModal(false)}} type='button'>CANCEL</button>
                <button type='submit'>SAVE</button>
            </form>
            </div>
        </>
    )
}

export default EditUser