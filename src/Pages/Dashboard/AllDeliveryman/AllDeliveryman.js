import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { toast } from 'react-hot-toast';
import Loader from '../../../components/Loader/Loader';
import { useContext } from 'react';
import { StateContext } from '../../../contexts/AuthProvider';

const AllDeliveryman = () => {
    const { user, logOut } = useContext(StateContext);

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['name'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allDeliverymen?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            const data = await res.json();
            if (data?.statusCode === 401 || data?.statusCode === 403) {
                return logOut()
            }
            return data;
        }
    });

    if(isLoading) {
        return <Loader />
    }

    const handleAcceptRequest = (email) => {
        console.log(email);
        fetch(`https://fg-server.vercel.app/deliveryman-request-accept?email=${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    }

    const handleRejectRequest = (email) => {
        console.log(email);
        fetch(`https://fg-server.vercel.app/deliveryman-request-reject?email=${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })
    }


    const handleDelete = user => {
        console.log(user._id);
        fetch(`https://fg-server.vercel.app/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${user.name} deleted successfully`)
                }
            })
    }

    return (
        <div className=''>
            <h2 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">All Delivery Mans</h2>
            <div className="overflow-x-auto w-full px-6">
                <table className="table table-compact w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verification</th>
                            <th>Documents</th>
                            <th>Verify Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users?.map((user, i) =>
                                <tr key={i}>
                                    <td>
                                        <div className="font-bold">{i + 1}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{user.name}</div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {
                                            user?.workPermitStatus ? <p className='text-center'>{((user?.workPermitStatus === 'Accepted' && <small className='bg-blue-500 text-white rounded-full py-[3px] px-3 font-semibold'>{user?.workPermitStatus}</small>) || (user?.workPermitStatus === 'Rejected' && <small className='bg-red-500 text-white rounded-full py-[3px] px-3 font-semibold'>{user?.workPermitStatus}</small>))}</p> : <small>Not Requested</small>
                                        }
                                    </td>
                                    <td>
                                        {
                                            user?.certification && <>
                                                <PhotoProvider>
                                                    <PhotoView src={user?.certification}>
                                                        <img src={user?.certification} alt="" className='cursor-pointer w-16 h-16' />
                                                    </PhotoView>
                                                </PhotoProvider>
                                            </>
                                        }
                                    </td>
                                    <td>
                                        {
                                            (!user?.verified && user?.workPermitStatus) ? <>
                                                <button onClick={() => handleAcceptRequest(user?.email)} className='btn btn-xs btn-primary'>Accept</button> <br />
                                                <button onClick={() => handleRejectRequest(user?.email)} className='btn btn-xs btn-error'>Reject</button>
                                            </> : (user?.verified ? <p className='bg-blue-500 text-center text-white font-semibold rounded-full'><small>Verified</small></p> : <p><small>Not Available</small></p>)
                                        }
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(user)} className="btn  bg-red-600 btn-xs">Delete</button>
                                    </th>
                                </tr>)
                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default AllDeliveryman;