import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { StateContext } from '../../contexts/AuthProvider';
import useFindAdmin from '../../hooks/useFindAdmin';

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(StateContext);
  const [isAdmin, isAdminLoading] = useFindAdmin(user?.email)
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loader />
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to={user ? '/dashboard' : '/login'} state={{ from: location }}></Navigate>
};

export default AdminRoutes;