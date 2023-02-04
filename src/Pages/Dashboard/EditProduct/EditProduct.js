import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { StateContext } from '../../../contexts/AuthProvider';

const EditProduct = () => {
    const { AllProducts } = useContext(StateContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const productId = useParams();
    const filterd = AllProducts?.find(product => product?._id === productId?.id);

    
    const handleSubmitEdittedProduct = (data) => {
        // console.log(data);
        if (data?.photo.length > 0) {
            const image = data?.photo[0];
            const formData = new FormData();
            formData.append('image', image);

            fetch(`https://api.imgbb.com/1/upload?key=5ecef3f26027aea9e3fef6c177020bfb`, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imageData => {
                    console.log(imageData?.data?.url);
                    if (imageData.success) {
                        const updatedProductData = {
                            name: data?.name,
                            category_name: data?.category_name,
                            original_price: data?.original_price ? parseInt(data?.original_price) : "",
                            save: data?.save,
                            price: parseInt(data?.price),
                            bundle: data?.bundle,
                            quantity: parseInt(data?.quantity),
                            stock: parseInt(data?.stock),
                            sub_category: data?.sub_category,
                            imageUrl: imageData?.data?.url,
                            description: data?.description,
                        }
                        console.log(updatedProductData)
                        fetch(`https://fg-server.vercel.app/product/${filterd?._id}`, {
                            method: "PUT",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(updatedProductData)
                        }).then(res => res.json())
                            .then(data => {
                                if (data?.modifiedCount > 0) {
                                    console.log(data);
                                    toast.success(`${filterd?.name} updated successfully`);
                                }
                            })
                    }
                })
        }
        else {
            const updatedProductData = {
                name: data?.name,
                category_name: data?.category_name,
                original_price: data?.original_price ? parseInt(data?.original_price) : "",
                save: data?.save,
                price: parseInt(data?.price),
                bundle: data?.bundle,
                quantity: parseInt(data?.quantity),
                stock: parseInt(data?.stock),
                sub_category: data?.sub_category,
                description: data?.description,
            }
            console.log(updatedProductData)
            fetch(`https://fg-server.vercel.app/product/${filterd?._id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updatedProductData)
            }).then(res => res.json())
                .then(data => {
                    if (data?.modifiedCount > 0) {
                        console.log(data);
                        toast.success(`${filterd?.name} updated successfully`);
                    }
                })
        }
    }

    return (
        <div className="">
            <div className="px-6">
                <h2 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">Edit Product</h2>
                <form onSubmit={handleSubmit(handleSubmitEdittedProduct)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>

                            <input
                                type="text"
                                defaultValue={filterd?.name}
                                className="input input-bordered w-full"
                                {...register("name", { required: "Product name is required" })}
                            />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">category_name</span>
                            </label>

                            <input
                                type="text"
                                defaultValue={filterd?.category_name}
                                className="input input-bordered w-full "
                                {...register("category_name", { required: "Category name is required" })}
                            />
                            {errors.category_name && <p className='text-red-600'>{errors.category_name?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">Original Price</span>
                            </label>

                            <input
                                type="number"
                                defaultValue={filterd?.original_price}
                                className="input input-bordered w-full"
                                {...register("original_price")}
                            />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">Discount (%)</span>
                            </label>

                            <input
                                type="text"
                                defaultValue={filterd?.save}
                                className="input input-bordered w-full"
                                {...register("save")}
                            />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>

                            <input
                                type="number"
                                defaultValue={filterd?.price}
                                className="input input-bordered w-full "
                                {...register("price", { required: "Set product price" })}
                            />
                            {errors.price && <p className='text-red-600'>{errors.price?.message}</p>}
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">bundle</span>
                            </label>

                            <input
                                type="text"
                                defaultValue={filterd?.bundle}
                                className="input input-bordered w-full "
                                {...register("bundle", { required: "Set a bundle" })}
                            />
                            {errors.bundle && <p className='text-red-600'>{errors.bundle?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">quantity</span>
                            </label>

                            <input
                                type="number"
                                defaultValue={filterd?.qunatity}
                                className="input input-bordered w-full "
                                {...register("quantity", { required: "Set quantity" })}
                            />
                            {errors.qunatity && <p className='text-red-600'>{errors.qunatity?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">sub_category</span>
                            </label>

                            <input
                                type="text"
                                defaultValue={filterd?.sub_category}
                                className="input input-bordered w-full "
                                {...register("sub_category", { required: "Sub category is required" })}
                            />
                            {errors.sub_category && <p className='text-red-600'>{errors.sub_category?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">Stock</span>
                            </label>

                            <input
                                type="number"
                                defaultValue={filterd?.stock}
                                className="input input-bordered w-full "
                                {...register("stock", { required: "Set total stock products" })}
                            />
                            {errors.stock && <p className='text-red-600'>{errors.stock?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">Product Image</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("photo")} multiple="multiple"/>
                        </div>
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text font-bold">Prodcut Description</span>
                        </label>
                        <textarea
                            name="description"
                            id=""
                            cols="50"
                            rows="10"
                            defaultValue={filterd?.description}
                            className="input input-bordered w-full h-20 px-3 py-1"
                            {...register("description", { required: "Write product description" })}
                        ></textarea>
                        {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                    </div>
                    <br />
                    <button className='btn w-full' type='submit'>Edit</button>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;