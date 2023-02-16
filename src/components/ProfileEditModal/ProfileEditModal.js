import React from 'react';

const ProfileEditModal = ({ shoModal, setShowModal, user }) => {

  return (
    <>
      <input type="checkbox" id="profileModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="profileModal" className="btn btn-sm btn-circle absolute top-2 right-2">✕</label>

          <p>{user?.displayName}</p>
          <p>{user?.email}</p>
        </div>
      </div>
    </>
  );
};

export default ProfileEditModal;