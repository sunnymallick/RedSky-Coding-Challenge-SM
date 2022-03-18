import React, { useState } from 'react'
import './AddUser.css'

const AddUser = ({ setShowModal, newUser }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    
    const updateFirstName = (e) => setFirstName(e.target.value);
    const updateLastName = (e) => setLastName(e.target.value);
    const updateEmail = (e) => setEmail(e.target.value);
    const updateAvatar = (e) => setAvatar(e.target.value);

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await newUser(firstName, lastName, email, avatar);
        setShowModal(false);
    }

    return (
        <div className='add-user-container'>
            <div className='add-user-title'>
				<h2 className='add-title'>Create New User</h2>
			</div>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <div className='input-title-container'>
                        <h3>FIRST NAME</h3>
                    </div>
                    <input
                        className='form-input'
                        type='text'
                        value={firstName}
                        onChange={updateFirstName}
                        required />
                    <div className='input-title-container'>
                        <h3>LAST NAME</h3>
                    </div>
                    <input
                        className='form-input'
                        type='text'
                        value={lastName}
                        onChange={updateLastName}
                        required />
                    <div className='input-title-container'>
                        <h3>EMAIL ADDRESS</h3>
                    </div>
                    <input 
                        className='form-input'
                        type='email'
                        value={email}
                        onChange={updateEmail}
                        required />
                    <div className='input-title-container'>
                        <h3>AVATAR IMAGE LINK</h3>
                    </div>
                    <input
                        className='form-input'
                        type='text'
                        value={avatar}
                        onChange={updateAvatar}
                        required />
                    <div className='buttons-container'>
                        <button onClick={() => {setShowModal(false)}} type='button' className='cancel-button'>CANCEL</button>
                        <button type='submit' className='button'>CREATE</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default AddUser