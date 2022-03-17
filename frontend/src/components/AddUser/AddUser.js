import React, { useState } from 'react'

const AddUser = ({ setShowModal, newUser }) => {
    const [firstName, setFirstName] = useState('test');
    const [lastName, setLastName] = useState('test');
    const [email, setEmail] = useState('test@test.com');
    const [avatar, setAvatar] = useState('test');
    
    const updateFirstName = (e) => setFirstName(e.target.value)
    const updateLastName = (e) => setLastName(e.target.value)
    const updateEmail = (e) => setEmail(e.target.value)
    const updateAvatar = (e) => setAvatar(e.target.value)

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await newUser(firstName, lastName, email, avatar);
        setShowModal(false)
    }

    return (
        <div className='form-container'>
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
                <button onClick={() => {setShowModal(false)}}>CANCEL</button>
                <button type='submit'>CREATE</button>
            </form>
        </div>
    )
}

export default AddUser