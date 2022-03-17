import React, { useState } from 'react';


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
                <button onClick={() => {setShowModal(false)}} type='button'>CANCEL</button>
                <button type='submit'>SAVE</button>
            </form>
            </div>
        </>
    )
}

export default EditUser