import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../Loader/Loader';
import SingleReview from './SingleReview';

const ProductReview = ({ id }) => {
  const {
    data=[],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      fetch('http://localhost:5000/reviews').then((res) => res.json()),
  });

  // console.log(data);
  // console.log(id);

  const reviews = data?.filter(item => item?.productId === id)

  // console.log(reviews);
  return (
    <div className='my-10'>
      <div>
        {isLoading && <Loader></Loader>}
      </div>
      <hr className='my-10'></hr>
      <h1 className='text-center text-3xl font-bold'>All Reviews</h1>

      <div className='grid grid-cols-3 text-2xl font-bold'>
        <div><h2>Rating</h2></div>
        <div><h2>Feedback</h2></div>
        
      </div>

      {
        !isLoading &&
        reviews.map(review => <SingleReview
          key={review._id}
          review={review}

        ></SingleReview>)
      }
    </div>
  );
};

export default ProductReview;