import { useState } from 'react'
import { Modal } from '../../context/Modal'
import EditUser from './EditUser'


function EditUserModal({ editUser, userId, users }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className='site-button' onClick={() => setShowModal(true)}>EDIT</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditUser setShowModal={setShowModal} editUser={editUser} userId={userId} users={users} />
                </Modal>
            )}
        </>

    )
}

export default EditUserModal