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
        <div className='my-10'>
            <h2 className="text-3xl text-yellow-700 text-center mb-4">All Deliveryman</h2>
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
                                            user?.certification && <PhotoProvider>
                                                <PhotoView src={user?.certification}>
                                                    <img src={user?.certification} alt="" />
                                                </PhotoView>
                                            </PhotoProvider>
                                        }
                                    </td>
                                    <th>
                                        {
                                            user?.workPermitStatus && <>
                                                <button className='btn btn-xs btn-primary'>Accept</button> <br />
                                                <button className='btn btn-xs btn-error'>Reject</button>
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