import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleAddProduct = () => {

  }

  return (
    <div className="">
      <div className="px-6">
        <h1 className="text-center md:text-2xl font-bold mb-4 p-0 md:p-10">
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
                placeholder="name"
                className="input input-bordered w-full "
                {...register("name", { required: "Product name is required" })}
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">Category Name</span>
              </label>

              <input
                type="text"
                placeholder="category_name"
                className="input input-bordered w-full "
                {...register("category_name", { required: "Category name is required" })}
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
                {...register("price", { required: "Set product price" })}
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
                {...register("original_price")}
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">Discount</span>
              </label>

              <input
                type="text"
                placeholder="save"
                className="input input-bordered w-full "
                {...register("save")}
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
                <span className="label-text font-bold">Sell Amount</span>
              </label>

              <input
                type="text"

                placeholder="sell_amount"
                className="input input-bordered w-full "
                {...register("price", { required: "Set product price" })}
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
              cols="50"
              rows="10"
              className="input input-bordered w-full h-20 px-3 py-1"
              {...register("description", { required: "Write product description" })}
            ></textarea>
            {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
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