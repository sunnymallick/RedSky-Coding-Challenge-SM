import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddUser from './AddUser';


function AddUserModal({ newUser }) {
    const [showModal, setShowModal] = useState(false);

    return (
		<>
			<button className='site-button' onClick={() => setShowModal(true)}>CREATE NEW USER</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<div className='add-user-container'>
						<h3 className='add-title'>Create New User</h3>
					</div>
					<AddUser setShowModal={setShowModal} newUser={newUser} />
				</Modal>
			)}
		</>
	);
}

export default AddUserModal