import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { StateContext } from '../../contexts/AuthProvider';



const AddReview = ({name,id}) => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(StateContext);
   

    const submitReview = review => {
       console.log(review);
       const data= {...review,
        customerName:user?.displayName,
        customerEmail:user?.email,
        productId:id,
        porductName:name
    }
       console.log(data);
      
       fetch('https://fg-server.vercel.app/reviews', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
       })
        
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-center text-xl font-bold'>Write A Review for <br/> <span className='text-accent-focus'>{name}</span></h2>
                <form onSubmit={handleSubmit(submitReview)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Product Quality</span>
                            </label>
                            <select  className="select select-bordered w-full"
                         {...register("rating",  { required: true })}>
                            <option value="Excellent">Excellent</option>
                            <option value="good">Good</option>                            
                            <option value="poor">Poor</option>
                        </select>
                       

                    </div>
                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text font-bold">Share your experience</span>
                            </label>
                            <textarea type='text'
                             {...register("feedback",{
                                required: false
                             })}
                             className="textarea border border-slate-300" placeholder="We always evaluate your feedback"></textarea>
                    
                    </div>
                   
                    <input className='btn btn-accent w-full mt-4' value="Submit" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;