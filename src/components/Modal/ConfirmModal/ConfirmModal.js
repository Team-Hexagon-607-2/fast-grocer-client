import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { StateContext } from '../../../contexts/AuthProvider';

const ConfirmModal = ({setProcessing, workPermitStatus}) => {
  const { user } = useContext(StateContext);
  const { register, handleSubmit, formState: { errors } } = useForm();


  const handleRequestPermition = (data) => {
    setProcessing(true);

    const image = data.photo[0];
    const formData = new FormData();
    formData.append('image', image);
    fetch(`https://api.imgbb.com/1/upload?key=5ecef3f26027aea9e3fef6c177020bfb`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imageData => {
        
        console.log(imageData);
        if (imageData.success) {
          const imageUrl = {
            certification: imageData.data.url
          }
          fetch(`http://localhost:5000/deliveryman?email=${user?.email}`, {
            method: 'PUT',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(imageUrl)
          })
            .then(res => res.json())
            .then(data => {
              setProcessing(false);
              console.log(data);
              if (data.modifiedCount > 0) {
                toast.success('Requsted successfully');
              }
            })
            .catch(err => {
              toast.error(err);
              setProcessing(false);
            })
        }
      })
  }

  return (
    <div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="deliveryman-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="deliveryman-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form onSubmit={handleSubmit(handleRequestPermition)}>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type='text' name='email'
                {...register("email", { required: true })}
                className="input input-bordered w-full" value={user?.email} readOnly />
              {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>

            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Contact No.</span>
              </label>
              <input type='text' name='contact'
                {...register("contact", { required: "Contact Number is required" })}
                className="input input-bordered w-full" disabled={workPermitStatus}/>
              {errors.email && <p className='text-red-600'>{errors.contact?.message}</p>}
            </div>

            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">NID/Birth Certificate</span>
              </label>
              <input type="file" name='photo' {...register("photo", { required: "Nid/Birth Certificate is required" })} className="file-input file-input-bordered w-full" disabled={workPermitStatus}/>
              {errors.photo && <p className='text-red-600'>{errors.photo?.message}</p>}
            </div>
            <button type="submit" className='bg-[#9acd5e] hover:bg-[#80b248] py-2 duration-300 rounded-md px-3 w-full' disabled={workPermitStatus}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;