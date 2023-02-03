import React from 'react';
import ReactStars from 'react-star-rating-component';

const SingleReview = ({review}) => {
    const {rating, feedback} = review;
    return (
        <div className='grid grid-cols-3'>
      <div>
        <ReactStars
         starCount={rating}
         editing={false}
         emptyStarColor={"#ffc107"}
        ></ReactStars>
      </div>
      <div>{feedback}</div>
      
      </div>
    );
};

export default SingleReview;