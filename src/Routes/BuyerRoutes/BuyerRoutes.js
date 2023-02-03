import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { StateContext } from '../../contexts/AuthProvider';
import useFindBuyer from '../../hooks/useFindBuyer';

const BuyerRoutes = ({children}) => {
  const { user, loading } = useContext(StateContext);
  const [isBuyer, isBuyerLoading] = useFindBuyer(user?.email);
  const location = useLocation();
  
  if(loading || isBuyerLoading) {
    return <Loader />
  }

  if(user && isBuyer) {
    return children;
  }

  return <Navigate to={user ? '/dashboard' : '/login'} state={{from: location}}></Navigate>
};

export default BuyerRoutes;