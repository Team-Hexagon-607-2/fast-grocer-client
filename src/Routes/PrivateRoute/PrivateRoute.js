import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { StateContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(StateContext);
  if(loading){
    return <p>Loading...</p>
  }
  if(user){
    return children;
  }else{
    return <Navigate to={user ? '/' : '/login'}></Navigate>
  }
};

export default PrivateRoute;