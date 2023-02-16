import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { StateContext } from '../../contexts/AuthProvider';
import useFindDeliveryman from '../../hooks/useFindDeliveryman';

const DeliveryRoutes = ({children}) => {
  const { user, loading } = useContext(StateContext);
  const [isDeliveryman, isDeliverymanLoading] = useFindDeliveryman(user?.email);
  const location = useLocation();

  if (loading || isDeliverymanLoading) {
    return <Loader />
  }

  if (user && isDeliveryman) {
    return children;
  }

  return <Navigate to={user ? '/dashboard' : '/login'} state={{ from: location }}></Navigate>
};

export default DeliveryRoutes;