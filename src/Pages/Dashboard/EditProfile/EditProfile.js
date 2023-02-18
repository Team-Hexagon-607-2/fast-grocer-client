import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../../../contexts/AuthProvider';

const EditProfile = () => {
  const { user, updateUser } = useContext(StateContext);
  const [image, setImage] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleProfileUpdate = (data) => {
    if (image) {
      setLoading(true);
      imageBbUpload(image, data);
    }
    else {
      setLoading(true);

      const profile = {
        displayName: data?.fullName,
      };

      updateUser(profile)
        .then(() => {
          saveDBUserInfo(data?.fullName, user?.photoURL, data?.contactInfo)
        })
        .catch(err => {
          toast.error(err.message);
          setLoading(false);
        });
    }
  };

  function imageBbUpload(img, data) {
    const image = img;
    const formData = new FormData();
    formData.append('image', image);

    fetch(`https://api.imgbb.com/1/upload?key=5ecef3f26027aea9e3fef6c177020bfb`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imageData => {
        if (imageData?.success) {
          const profile = {
            photoURL: imageData?.data?.url,
            displayName: data?.fullName,
          };

          updateUser(profile)
            .then(() => {
              data.image = user?.photoURL;
              updateDBUserInfo(data)
            })
            .catch(err => {
              toast.error(err.message);
              setLoading(false);
            });
        }
      })
      .catch(err => {
        toast.error(err.message);
        setLoading(false);
      })
  };

  const updateDBUserInfo = (data) => {
    const updateUserData = {
      name: data?.fullName,
      image: data?.image,
      contact: data?.contactInfo,
    };

    fetch(`http://localhost:5000/user/${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(updateUserData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          setLoading(false);
          toast.success('profile update success');
          navigate('/dashboard')
        }
      })
      .catch(err => {
        toast.error(err.message);
        setLoading(false);
      })
  };

  const saveDBUserInfo = (name, image, contact) => {
    const updateUserData = {
      name: name,
      image: image,
      contact: contact,
    };

    fetch(`http://localhost:5000/user/${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(updateUserData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          setLoading(false);
          toast.success('profile update success');
          navigate('/dashboard')
        }
      })
      .catch(err => {
        toast.error(err.message);
        setLoading(false);
      })
  };

  return (
    <div>
      <h2 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">Edit Profile</h2>

      <form onSubmit={handleSubmit(handleProfileUpdate)} className='flex gap-10 ml-20'>
        <div>
          <img className="mb-1 h-32 w-32 mx-auto rounded-full shadow-lg" src={image ? URL.createObjectURL(image) : (user?.photoURL || 'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png')} alt='' />
          <br />

          <div className='relative overflow-hidden'>
            <h2 className='bg-[#9acd5e] py-1 px-2 text-center duration-300 rounded-md w-full'>Upload</h2>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" className='absolute top-0 left-0 h-9 opacity-0' />
          </div>
        </div>

        <div>
          <div className='mb-5'>
            <p className='font-semibold'><small>Full name</small></p>
            <input {...register('fullName')} type='text' defaultValue={user?.displayName} className="input input-sm input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" />
          </div>
          <div className='mb-5'>
            <p className='font-semibold'><small>Email Address (Email Address cannot be changed)</small></p>
            <input type='text' defaultValue={user?.email} readOnly className="input input-sm input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" />
          </div>
          <div className='mb-5'>
            <p className='font-semibold'><small>Contact info</small></p>
            <input {...register('contactInfo')} type='text' className="input input-sm input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" placeholder='+880 1870130413' required />
          </div>
          <button className={loading ? 'loading btn btn-sm bg-slate-800 flex justify-end' : 'btn btn-sm bg-slate-800 flex justify-end'}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;