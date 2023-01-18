import React from 'react';

const AllDeliveryman = () => {
    return (
        <div className='my-10'>
        <h2 className="text-3xl text-yellow-700 text-center mb-4">All Deliveryman</h2>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Buyer Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    
                        {/* users?.map((user, i) => */}
                            <tr>
                                <td>
                                    <div className="font-bold">i + 1</div>
                                </td>
                                <td>
                                    <div className="font-bold">user.name</div>
                                </td>
                                <td>
                                    user.email
                                </td>
                                <th>
                                    <button className="btn bg-red-600 btn-xs">Delete</button>
                                </th>
                            </tr>
                    
                </tbody>



            </table>
        </div>
    </div>
    );
};

export default AllDeliveryman;