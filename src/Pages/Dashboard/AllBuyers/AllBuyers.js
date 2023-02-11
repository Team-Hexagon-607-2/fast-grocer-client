import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import Loader from '../../../components/Loader/Loader';
import { StateContext } from '../../../contexts/AuthProvider';

const AllBuyers = () => {
    const { user, logOut } = useContext(StateContext);

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['name'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allBuyers?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            const data = await res.json();
            if (data?.statusCode === 401 || data?.statusCode === 403) {
                return logOut();
            }
            return data;
        }
    });

    if(isLoading) {
        return <Loader />
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
            <h2 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">All Buyers</h2>
            <div className="overflow-x-auto w-full px-6">
                <table className="table table-compact w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Buyer Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users?.map((user, i) =>
                                <tr>
                                    <td>
                                        <div className="font-bold">{i + 1}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{user.name}</div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(user)} className="btn bg-red-600 btn-xs">Delete</button>
                                    </th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;