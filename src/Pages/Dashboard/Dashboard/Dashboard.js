import React, { useContext } from 'react';
import { StateContext } from '../../../contexts/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(StateContext);
    return (
        <div className='mt-10'>
            <h2 className="text-4xl text-yellow-700 text-center mb-4">My Profile</h2>
                <img
                    className="mb-3 h-24 w-24 mx-auto rounded-full shadow-lg"  src={user?.photoURL || 'https://picsum.photos/200/300' }
                     alt='' />
                <h4 className='text-2xl text-center'>
                    Name: {user?.displayName} <br />
                    Email: {user?.email}
                </h4>
                
        </div>
    );
};

export default Dashboard;