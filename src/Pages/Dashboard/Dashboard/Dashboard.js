import React from 'react';

const Dashboard = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-center text-2xl'>
                <img
                    className="mb-3 h-24 w-24 mx-auto rounded-full shadow-lg"
                     alt='' />
                    Name <br />
                    Email
                {/* Name: {user?.displayName} <br />
                Email: {user?.email} */}
                </h2>
        </div>
    );
};

export default Dashboard;