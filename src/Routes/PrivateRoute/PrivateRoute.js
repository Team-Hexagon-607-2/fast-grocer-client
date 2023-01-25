import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { StateContext } from '../../contexts/AuthProvider';
import Loader from '../../components/Loader/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(StateContext);
    const location = useLocation();
    if (loading) {
        return <Loader></Loader>;
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;