import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
const ReturnConfirmModal = ({setProcessing, orderId}) => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleReturnRequest = (data) => {
    setProcessing(true);

    const image = data?.photo[0];
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

          const returnProduct = {
            returnReason: data?.reason,
            productPhoto: imageData.data.url,
          }

          fetch(`http://localhost:5000/return-request/${orderId}`, {
            method: 'PUT',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(returnProduct)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              setProcessing(false);
              if (data.modifiedCount > 0) {
                toast.success('Requsted successfully');
              }
            })
            .catch(err => {
              toast.error(err.message);
              setProcessing(false);
            })
        }
      }).catch(err => {
        toast.error(err.message);
        setProcessing(false);
      })
    }
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="return-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="return-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className='text-center my-3 font-semibold'>Please Provide your Return Reason and Photo</div>
          <form onSubmit={handleSubmit(handleReturnRequest)}>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Return Reason</span>
              </label>
              <input type='text' name='reason'
                {...register("reason", { required: "Write return reason"})}
                className="input input-bordered w-full" placeholder='Write your return reason'/>
              {errors.reason && <p className='text-red-600'>{errors.reason?.message}</p>}
            </div>

            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Product Photo</span>
              </label>
              <input type="file" name='photo' {...register("photo", { required: "Product photo is required" })} className="file-input file-input-bordered w-full"/>
              {errors.photo && <p className='text-red-600'>{errors.photo?.message}</p>}
            </div>
            <button type="submit" className='bg-[#9acd5e] hover:bg-[#80b248] py-2 duration-300 rounded-md px-3 w-full disabled:bg-gray-400'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReturnConfirmModal;