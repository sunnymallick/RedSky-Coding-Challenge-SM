import React, { useState } from 'react';
import './EditUser.css'

const EditUser = ({ editUser, setShowModal, users, userId }) => {
    const individualUser = users.find(user => user.id === userId);
    const [firstName, setFirstName] = useState(individualUser.first_name);
    const [lastName, setLastName] = useState(individualUser.last_name);
    const [email, setEmail] = useState(individualUser.email);
    const [avatar, setAvatar] = useState(individualUser.avatar);
    
    const updateFirstName = (e) => setFirstName(e.target.value);
    const updateLastName = (e) => setLastName(e.target.value);
    const updateEmail = (e) => setEmail(e.target.value);
    const updateAvatar = (e) => setAvatar(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await editUser(+userId, firstName, lastName, email, avatar);
        setShowModal(false);
    };

    return (
        <div className='edit-user-container'>
                <div className='edit-user-title'>
                    <h2 className='edit-title'>EDIT USER</h2>
                </div>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <div className='input-title-container'>
                        <h3>FIRST NAME</h3>
                    </div>
                    <input
                    className='form-input'
                    type='text'
                    placeholder='First Name'
                    value={firstName}
                    onChange={updateFirstName}
                    required />
                <div className='input-title-container'>
                    <h3>LAST NAME</h3>
                </div>
                <input
                    className='form-input'
                    type='text'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={updateLastName}
                    required />
                <div className='input-title-container'>
                    <h3>EMAIL ADDRESS</h3>
                </div>
                <input 
                    className='form-input'
                    type='email'
                    placeholder='Email Address'
                    value={email}
                    onChange={updateEmail}
                    required />
                <div className='input-title-container'>
                    <h3>AVATAR IMAGE LINK</h3>
                </div>
                <input
                    className='form-input'
                    type='text'
                    placeholder='Avatar Link'
                    value={avatar}
                    onChange={updateAvatar}
                    required />
                <div className='buttons-container'>
                    <button onClick={() => {setShowModal(false)}} type='button' className='cancel-button'>CANCEL</button>
                    <button type='submit' className='button'>SAVE</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default EditUser;