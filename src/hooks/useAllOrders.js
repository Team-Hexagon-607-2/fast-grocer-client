import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { StateContext } from '../contexts/AuthProvider';

const useAllOrders = () => {
  const { user, logOut } = useContext(StateContext);

  const { data: allOrders = [], isLoading: allOrdersLoading, isError: allOrderError, refetch: allOrdersRefetch, } = useQuery({
    queryKey: ["allOrder", user?.email],
    queryFn: () =>
      fetch(`https://fg-server.vercel.app/allOrders?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
        .then((res) => res.json())
  });

  return { allOrders, allOrdersLoading, allOrdersRefetch, allOrderError};
};

export default useAllOrders;