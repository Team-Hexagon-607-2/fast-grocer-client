import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';

const AddProduct = () => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm();
 
  const handleAddProduct=data=>{
     console.log(data);
  }

    return (
        <div className="">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600">
            <h1 className="mb-5 text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
               Add Product
            </h1>
  
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
  
              <input
                type="text"
                {...register("resalePrice", {})}
                placeholder="name"
               
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">category_name</span>
              </label>
  
              <input
                type="text"
               
                placeholder="category_name"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">Price</span>
              </label>
  
              <input
                type="text"
              
                placeholder="price"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">Original Price</span>
              </label>
  
              <input
                type="text"
                
                placeholder="Original Price"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">save</span>
              </label>
  
              <input
                type="text"
                
                placeholder="save"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">bundle</span>
              </label>
  
              <input
                type="text"
                
                placeholder="bundle"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">qunatity</span>
              </label>
  
              <input
                type="text"
              placeholder="quantity"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">sub_category</span>
              </label>
  
              <input
                type="text"
                
                placeholder="sub_category"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">stock</span>
              </label>
  
              <input
                type="text"
                
                placeholder="stock"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">status</span>
              </label>
  
              <input
                type="text"
                
                placeholder="status"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">sell_amount</span>
              </label>
  
              <input
                type="text"
                
                placeholder="sell_amount"
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
              placeholder="Product Description"
              className="input input-bordered w-full "
            
            ></textarea>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Product Image</span>
            </label>
  
            <input
              type="file"
            
         
              placeholder="Enter Your Name"
              className="input input-bordered w-full py-2 "
            />
          </div>
          <br />
          <input className="btn btn-accent w-full mt-6" type="submit" />
        </form>
      </div>
      </div>
    );
};

export default AddProduct;