import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import ConfirmModal from '../../../components/Modal/ConfirmModal/ConfirmModal';
import { StateContext } from '../../../contexts/AuthProvider';
import useDBUserData from '../../../hooks/useDBUserData';
import useFindAdmin from '../../../hooks/useFindAdmin';
import useFindBuyer from '../../../hooks/useFindBuyer';
import useFindDeliveryman from '../../../hooks/useFindDeliveryman';

const Dashboard = () => {
    const { user } = useContext(StateContext);
    const [isAdmin] = useFindAdmin(user?.email);
    const [isDeliverymen] = useFindDeliveryman(user?.email);
    const [isBuyer] = useFindBuyer(user?.email);
    const [processing, setProcessing] = useState(false);
    const [dbUser] = useDBUserData(user?.email);
 
    const { data: deliverymanData, refetch } = useQuery({
        queryKey: ['working-status'],
        queryFn: async () => {
            const res = await fetch(`https://fg-server.vercel.app/deliveryman-work-status?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    refetch();

    const handleClick = () =>{
        console.log(deliverymanData?.availabilityStatus);
        const updatedUser ={
            availabilityStatus: !deliverymanData?.availabilityStatus
        } 
        fetch(`https://fg-server.vercel.app/deliveryman-toggle-availability?email=${user?.email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updatedUser)
            })
        .then(res => res.json())
        .then(data => {
                console.log(data);
                toast.success("Your status is updated successfully");
            })
    }

    return (
        <div className=''>
            <h2 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">My Profile</h2>
            <div className='flex flex-col md:flex-row items-start'>
                <div className='mr-10 flex flex-col justify-center px-20 mx-auto md:mx-0'>
                    <img
                        className="mb-1 h-32 w-32 mx-auto rounded-full shadow-lg" src={user?.photoURL || 'https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'}
                        alt='' />
                    {
                        isAdmin && <p className='text-center'>Admin</p>
                    }
                    {
                        isDeliverymen && <p className='text-center'>Delivery Man</p>
                    }
                    {
                        isBuyer && <p className='text-center'>Buyer</p>
                    }
                    <br />
                    <Link to='/dashboard/edit-profile' className='bg-[#9acd5e] hover:bg-[#80b248] py-1 px-2 text-center duration-300 rounded-md'>Edit Profile</Link>
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
                        <p>{dbUser?.contact ? dbUser?.contact : 'N/A'}</p>
                    </div>
                    {
                        isDeliverymen && <div className='mb-5'>
                            <p className='font-semibold'><small>Account Verification</small></p>
                            <p>{deliverymanData?.verified ? "Verified" : 'Not Verified'}</p>
                        </div>
                    }
                    {
                        isDeliverymen && <div className='mb-5'>
                            <p className='font-semibold'><small>Work Permit</small></p>
                            <p>{deliverymanData?.workPermitStatus ? deliverymanData?.workPermitStatus : 'Not Allowed'}</p>
                        </div>
                    }
                    {
                        ((isDeliverymen && !deliverymanData?.workPermitStatus === "Accepted") || (isDeliverymen && !deliverymanData?.verified)) && <label htmlFor="deliveryman-modal" className={`bg-[#9acd5e] hover:bg-[#80b248] py-1 duration-300 rounded-md px-3`}>Request for Work Permit</label>
                    }
                    {
                        (isDeliverymen && deliverymanData?.availabilityStatus === true) && <button onClick={handleClick} className='bg-[#f13737] hover:bg-[#940404] text-white py-1 px-3 duration-300 rounded-md'>Take a Break</button>
                    }
                    {
                        (isDeliverymen && deliverymanData?.availabilityStatus === false) && <button onClick={handleClick} className='bg-[#4727ff] hover:bg-[#100e72] py-1 px-3 duration-300 rounded-md'>Get Back to Work</button>
                    }
                </div>
            </div>
            {
                (isDeliverymen && !processing) && <ConfirmModal setProcessing={setProcessing} workPermitStatus={deliverymanData?.workPermitStatus}></ConfirmModal>
            }
        </div>
    );
};

export default Dashboard;