import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddUser from './AddUser';


function AddUserModal({ newUser }) {
    const [showModal, setShowModal] = useState(false);

    return (
		<>
			<button className='large-button' onClick={() => setShowModal(true)}>CREATE NEW USER</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<AddUser setShowModal={setShowModal} newUser={newUser} />
				</Modal>
			)}
		</>
	);
}

export default AddUserModal