import React, { useState } from 'react'

const AddUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    
    const updateFirstName = (e) => setFirstName(e.target.value)
    const updateLastName = (e) => setLastName(e.target.value)
    const updateEmail = (e) => setEmail(e.target.value)
    const updateAvatar = (e) => setAvatar(e.target.value)

    const payload = { firstName, lastName, email, avatar }
    const newUser = async () => {
        const res = axios.post('/addUser', payload)
        if (res.ok) {

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(firstName, lastName, email, avatar)
        setFirstName('');
        setLastName('');
        setEmail('');
        setAvatar('');
    }
}

export default AddUser