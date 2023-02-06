import React from 'react';

const SingleReview = ({review}) => {
    const {rating, feedback} = review;
    return (
        <div className='grid grid-cols-3'>
      <div>{rating}</div>
      <div>{feedback}</div>
      
      </div>
    );
};

export default SingleReview;