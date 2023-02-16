import React from 'react';
import { useForm } from 'react-hook-form';


const ContactUs = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const sendQuery = data =>{
        console.log(data);
    }
    return (
        <div className='flex justify-center my-10'>
            <div>
            <h3 className='text-2xl'>Please send us your query here</h3>
            <form onSubmit={handleSubmit(sendQuery)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type='text'
                        {...register("name", {
                            required: "Name is required"
                        })}
                        className="input input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input type='text'
                        {...register("address", {
                            required: "Address is required"
                        })}
                        className="input input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" />
                    {errors.address && <p className='text-red-500'>{errors.address.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type='text'
                        {...register("phone", {
                            required: "Phone Number is required"
                        })}
                        className="input input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" />
                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <input type='textarea'
                        {...register("message", {
                            required: "Message is required"
                        })}
                        className="input input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" />
                    {errors.message && <p className='text-red-500'>{errors.message.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                <input className='btn w-1/3 mt-4 bg-[#84b840] hover:bg-[#6a9333] border-none' value="Submit" type="submit" />
                </div>

            </form>
            <br/>
            <span>Or</span><br/>
            <p className='font-bold'>Call us: 096239</p>
            </div>
        </div>
    );
};

export default ContactUs;