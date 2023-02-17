import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../../../contexts/AuthProvider';

const EditProfile = () => {
  const { user, updateUser } = useContext(StateContext);
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const navigate = useNavigate();

  const handleProfileUpdate = () => {
    if (image) {
      imageUpdate(image, name)
    } else {

    }
  };

  function imageUpdate(img, name) {
    const image = img;
    const formData = new FormData();
    formData.append('image', image);

    fetch(`https://api.imgbb.com/1/upload?key=5ecef3f26027aea9e3fef6c177020bfb`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imageData => {
        if (imageData.success) {
          const profile = {
            displayName: name,
            photoURL: imageData?.data?.url,
          };
          updateUser(profile)
            .then(() => {
              toast.success('profile update success');
              navigate('/dashboard')
            })
            .catch(err => toast.error(err.message))
        }
      })
  };

  return (
    <div >
      <h2 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">Edit Profile</h2>

      <div className='flex gap-10 ml-20'>
        <div>
          <img className="mb-1 h-32 w-32 mx-auto rounded-full shadow-lg" src={image ? URL.createObjectURL(image) : (user?.photoURL || 'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png')} alt='' />
          <br />
          {/* <button className='bg-[#9acd5e] hover:bg-[#80b248] py-1 px-2 text-center duration-300 rounded-md w-full'>Upload</button> */}
          <input onChange={(e) => setImage(e.target.files[0])} type="file" />
        </div>

        <div>
          <div className='mb-5'>
            <p className='font-semibold'><small>Full name</small></p>
            <input onBlur={(e) => setName(e.target.value)} type='text' defaultValue={user?.displayName} className="input input-sm input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" />
          </div>

          <div className='mb-5'>
            <p className='font-semibold'><small>Email Address (Email Address cannot be changed)</small></p>
            <input type='text' defaultValue={user?.email} readOnly className="input input-sm input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" />
          </div>

          <div className='mb-5'>
            <p className='font-semibold'><small>Phone</small></p>
            <input type='text' onBlur={(e) => setNumber(e.target.value)} className="input input-sm input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" />
          </div>
          <button onClick={handleProfileUpdate} className='btn btn-sm bg-slate-800 flex justify-end'>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;