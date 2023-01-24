import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { StateContext } from '../../../contexts/AuthProvider';
import useFindDeliveryman from '../../../hooks/useFindDeliveryman';

const Dashboard = () => {
    const { user } = useContext(StateContext);
    const [isDeliverymen] = useFindDeliveryman(user?.email);

    const handleRequestPermition = () =>{
        fetch(`http://localhost:5000/deliveryman?email=${user?.email}`, {
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
        <div className=''>
            <h2 className="text-2xl font-bold mb-4">My Profile</h2>
            <div className='flex flex-col md:flex-row items-start'>
                <div className='mr-10 flex flex-col justify-center px-20 mx-auto md:mx-0'>
                    <img
                        className="mb-1 h-32 w-32 mx-auto rounded-full shadow-lg" src={user?.photoURL || 'https://picsum.photos/200/300'}
                        alt='' />
                    <br />
                    <button className='bg-[#9acd5e] hover:bg-[#80b248] py-1 duration-300 rounded-md'>Edit Profile</button>
                </div>
                <div>
                    <div className='mb-5'>
                        <p className='font-semibold'><small>Name</small></p>
                        <p>{user?.displayName}</p>
                    </div>
                    <div className='mb-5'>
                        <p className='font-semibold'><small>Email</small></p>
                        <p>{user?.email}</p>
                    </div>
                    <div className='mb-5'>
                        <p className='font-semibold'><small>Contact No.</small></p>
                        <p>N/A</p>
                    </div>
                    {
                        isDeliverymen && <div className='mb-5'>
                        <p className='font-semibold'><small>Work Permit</small></p>
                        <p>Not Allowed</p>
                    </div>
                    }
                    {
                        isDeliverymen && <button onClick={handleRequestPermition} className='bg-[#9acd5e] hover:bg-[#80b248] py-1 duration-300 rounded-md px-3'>Request for Work Permit</button>
                    }
                </div>
            </div>

        </div>
    );
};

export default Dashboard;