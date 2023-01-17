import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center w-2/5 m-auto'>
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" alt="" />
            <h1 className="text-xl text-blue-800"><Link to={'/'}> <br />
                Go to <span className='text-blue-700 text-4xl'>Home</span>
                </Link> </h1>
        </div>
    );
};

export default ErrorPage;