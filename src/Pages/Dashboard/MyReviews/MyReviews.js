import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const MyReviews = () => {
  return (
    <div className='my-10'>
      <h2 className="text-3xl text-yellow-700 text-center mb-4">My Reviews</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Review Details</th>
              <th>Review Count</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <p>Onion small size</p>
              </td>
              <td>
                <AiFillStar className='inline-block text-yellow-400'/>
                <AiFillStar className='inline-block text-yellow-400'/>
                <AiFillStar className='inline-block text-yellow-400'/>
                <AiFillStar className='inline-block text-yellow-400'/>
                <AiFillStar className='inline-block text-yellow-400'/>
              </td>
              <th>
                <button className="btn btn-xs btn-error">Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;