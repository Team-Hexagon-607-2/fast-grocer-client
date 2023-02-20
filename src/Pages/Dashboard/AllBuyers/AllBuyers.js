import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import Loader from '../../../components/Loader/Loader';
import { StateContext } from '../../../contexts/AuthProvider';

const AllBuyers = () => {
  const { user, logOut } = useContext(StateContext);

  const { data: users, isLoading, refetch } = useQuery({
    queryKey: ['allBuyers', user?.email],
    queryFn: async () => {
      const res = await fetch(`https://fg-server.vercel.app/allBuyers?email=${user?.email}`, {
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


  if (isLoading) {
    return <Loader />
  }

  const handleDelete = deleteUser => {
    const permission = window.confirm(`Are Your sure you want to ${deleteUser?.name} delete product ?`);
    if (permission) {
      fetch(`https://fg-server.vercel.app/users/${deleteUser?._id}?email=${user?.email}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            refetch();
            toast.success(`${deleteUser.name} deleted successfully`)
          }
        })
        .catch(error => toast.error(error.message))
    }
  };

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
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
