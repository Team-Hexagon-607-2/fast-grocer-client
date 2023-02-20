import React from 'react';

const Payments = () => {
  return (
    <div className=''>
      <h2  className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">Payments</h2>
      <div className="overflow-x-auto w-full px-6">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Status</th>
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
                ৳25
              </td>
              <td>
                <button className="btn btn-xs btn-primary">Pay</button>
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

export default Payments;