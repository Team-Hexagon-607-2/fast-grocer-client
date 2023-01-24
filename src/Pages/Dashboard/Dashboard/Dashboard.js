import React, { useContext } from 'react';
import ConfirmModal from '../../../components/Modal/ConfirmModal/ConfirmModal';
import { StateContext } from '../../../contexts/AuthProvider';
import useFindDeliveryman from '../../../hooks/useFindDeliveryman';

const Dashboard = () => {
    const { user } = useContext(StateContext);
    const [isDeliverymen] = useFindDeliveryman(user?.email);

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
                        isDeliverymen && <label htmlFor="deliveryman-modal" className='bg-[#9acd5e] hover:bg-[#80b248] py-1 duration-300 rounded-md px-3'>Request for Work Permit</label>
                    }
                </div>
            </div>
                {
                    isDeliverymen && <ConfirmModal useremail = {user?.email}></ConfirmModal>
                }
        </div>
    );
};

export default Dashboard;