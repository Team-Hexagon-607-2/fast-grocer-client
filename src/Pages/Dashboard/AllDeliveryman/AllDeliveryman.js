import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { toast } from 'react-hot-toast';

const AllDeliveryman = () => {
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['name'],
        queryFn: async () => {
            const res = await fetch('https://fg-server.vercel.app/deliverymen');
            const data = await res.json();
            return data;
        }
    })

    const handleAcceptRequest = (email) =>{
        console.log(email);
        fetch(`http://localhost:5000/deliveryman-request-accept?email=${email}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            refetch();
        })
    }
    
    const handleRejectRequest = (email) =>{
        console.log(email);
        fetch(`http://localhost:5000/deliveryman-request-reject?email=${email}`,{
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
            <h2 className="text-2xl font-bold mb-4">All Delivery Mans</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

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
                                            user?.workPermitStatus ? <small>{user?.workPermitStatus}</small> : <small>Not Requested</small>
                                        }
                                    </td>
                                    <td>
                                        {
                                            user?.certification && <>
                                                <PhotoProvider>
                                                    <PhotoView src={user?.certification}>
                                                        <img src={user?.certification} alt="" className='cursor-pointer'/>
                                                    </PhotoView>
                                                </PhotoProvider>
                                            </>
                                        }
                                    </td>
                                    <th>
                                        {
                                            user?.workPermitStatus && <>
                                                <button onClick={() => handleAcceptRequest(user?.email)} className='btn btn-xs btn-primary'>Accept</button> <br />
                                                <button onClick={() => handleRejectRequest(user?.email)} className='btn btn-xs btn-error'>Reject</button>
                                            </>
                                        }
                                    </th>
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