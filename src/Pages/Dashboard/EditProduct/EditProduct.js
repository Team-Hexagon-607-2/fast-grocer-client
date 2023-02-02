import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { StateContext } from '../../../contexts/AuthProvider';

const EditProduct = () => {
    const { AllProducts } = useContext(StateContext)
    const productId = useParams();
    const filterd = AllProducts?.find(product => product?._id === productId?.id);

    const handleSubmitEdittedProduct = () =>{

    }

    return (
        <div className="">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600">
                <h2 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">Edit Product</h2>

                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>

                            <input
                                type="text"
                                defaultValue={filterd?.name}
                                className="input input-bordered w-full "
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">category_name</span>
                            </label>

                            <input
                                type="text"
                                defaultValue={filterd?.category_name}
                                className="input input-bordered w-full "
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>

                            <input
                                type="text"
                                defaultValue={filterd?.price}
                                className="input input-bordered w-full "
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">Original Price</span>
                            </label>

                            <input
                                type="text"
                                defaultValue={filterd?.original_price}
                                className="input input-bordered w-full "
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">save</span>
                            </label>

                            <input
                                type="text"
                                defaultValue={filterd?.save}
                                className="input input-bordered w-full "
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">bundle</span>
                            </label>

                            <input
                                type="text"
                                defaultValue={filterd?.bundle}
                                className="input input-bordered w-full "
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">quantity</span>
                            </label>

                            <input
                                type="text"
                                defaultValue={filterd?.qunatity}
                                className="input input-bordered w-full "
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">sub_category</span>
                            </label>

                            <input
                                type="text"
                                defaultValue={filterd?.sub_category}
                                className="input input-bordered w-full "
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">stock</span>
                            </label>

                            <input
                                type="text"
                                defaultValue={filterd?.stock}
                                className="input input-bordered w-full "
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">status</span>
                            </label>

                            <input
                                type="text"
                                defaultValue={filterd?.status}
                                className="input input-bordered w-full "
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">sell_amount</span>
                            </label>

                            <input
                                type="text"
                                defaultValue={filterd?.sell_amount}
                                className="input input-bordered w-full "
                            />
                        </div>
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text font-bold">Prodcut Description</span>
                        </label>
                        <textarea
                            name="description"
                            id=""
                            cols="30"
                            rows="10"
                            defaultValue={filterd?.description}
                            className="input input-bordered w-full "

                        ></textarea>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Product Image</span>
                        </label>

                        <input
                            type="file"
                            className="input input-bordered w-full py-2 "
                        />
                    </div>
                    <br />
                    <input onClick={handleSubmitEdittedProduct} className="btn btn-accent w-full mt-6" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default EditProduct;