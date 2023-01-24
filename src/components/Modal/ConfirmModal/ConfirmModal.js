import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const ConfirmModal = ({useremail}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  
  const handleRequestPermition = () =>{
    fetch(`http://localhost:5000/deliveryman?email=${useremail}`, {
        method: 'PUT',
    })
    .then(res => res.json())
    .then(data =>{
        if(data.modifiedCount > 0){
            toast.success('Requsted successfully');
        }
    })
    .catch(err => toast.error(err))

}

  return (
    <div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="deliveryman-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="deliveryman-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form onSubmit={handleSubmit(handleRequestPermition)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type='text'
                {...register("email", {
                  required: "Email Address is required"
                })}
                className="input input-bordered w-full max-w-xs" />
              {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>
            <button type="submit" className='bg-[#9acd5e] hover:bg-[#80b248] py-2 duration-300 rounded-md px-3 w-full'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;