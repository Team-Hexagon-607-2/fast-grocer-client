import React from 'react';
import { useContext } from 'react';
import { StateContext } from '../../../contexts/AuthProvider';

const EditProfile = () => {
  const { user } = useContext(StateContext);

  return (
    <div >
      <h2 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">Edit Profile</h2>

      <form className='flex gap-10 ml-20'>
        <div>
          <img className="mb-1 h-32 w-32 mx-auto rounded-full shadow-lg" src={user?.photoURL || 'https://picsum.photos/200/300'} alt='' />
          <br />
          <input className='bg-[#9acd5e] hover:bg-[#80b248] w-32 py-1 px-2 text-center duration-300 rounded-md placeholder:text-black' placeholder='upload' />
        </div>

        <div>
          <div className='mb-5'>
            <p className='font-semibold'><small>Full name</small></p>
            <input type='text' defaultValue={user?.displayName} className="input input-sm input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" />
          </div>
          <div className='mb-5'>
            <p className='font-semibold'><small>Email Address (Email Address cannot be changed)</small></p>
            <input type='text' defaultValue={user?.email} readOnly className="input input-sm input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" />
          </div>
          <div className='mb-5'>
            <p className='font-semibold'><small>Phone</small></p>
            <input type='text' className="input input-sm input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" />
          </div>
          <button className='btn btn-sm btn-primary flex justify-end'>Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;