import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { StateContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
  const { categories } = useContext(StateContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleAddProduct = (data) => {
    console.log(data);
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
          const setProductsData = {
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
          console.log(setProductsData)
          fetch(`http://localhost:5000/add-product`, {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(setProductsData)
          }).then(res => res.json())
            .then(data => {
              console.log(data);
              if (data?.acknowledged) {
                toast.success(`Product Added successfully`);
              }
            })
            .catch(err => {
              toast.error(err.message);
            })
        }
      })
      .catch(err =>{
        toast.error(err.message);
      })
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
              placeholder="Product Name"
              className="input input-bordered w-full "
              {...register("name", { required: "Product name is required" })}
            />
            {errors.name && <p className='text-red-600 text-sm'>*{errors.name?.message}</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Category Name</span>
            </label>
            <select {...register("category_name", { required: "Category is required" })} className="select select-bordered w-full ">
              {
                categories?.map(category => <option key={category?._id}>{category?.categoryName}</option>)
              }
            </select>
            {errors.category_name && <p className='text-red-600 text-sm'>*{errors.category_name?.message}</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>

            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full "
              {...register("price", { required: "Set product price" })}
            />
            {errors.price && <p className='text-red-600 text-sm'>*{errors.price?.message}</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Original Price</span>
            </label>

            <input
              type="number"

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
              placeholder="Discount e.g. 5%"
              className="input input-bordered w-full "
              {...register("save")}
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Bundle</span>
            </label>

            <input
              type="text"

              placeholder="Bundle"
              className="input input-bordered w-full "
              {...register("bundle", { required: "Product bundle required" })}
            />
            {errors.bundle && <p className='text-red-600 text-sm'>*{errors.bundle?.message}</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Quantity</span>
            </label>

            <input
              type="text"
              placeholder="Quantity per price"
              className="input input-bordered w-full "
              {...register("quantity", { required: "Set Quantity per price" })}
            />
            {errors.quantity && <p className='text-red-600 text-sm'>*{errors.quantity?.message}</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">sub_category</span>
            </label>

            <input
              type="text"

              placeholder="sub_category"
              className="input input-bordered w-full "
              {...register("sub_category")}
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
              {...register("stock", { required: "Set total product stock" })}
            />
            {errors.stock && <p className='text-red-600 text-sm'>*{errors.stock?.message}</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Status</span>
            </label>

            <select className='select select-bordered' {...register("status", { required: "Select Product availablity status" })}>
              <option>Available</option>
              <option>Limited Available</option>
            </select>
            {errors.status && <p className='text-red-600 text-sm'>*{errors.status?.message}</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Sell Amount</span>
            </label>

            <input
              type="number"

              placeholder="sell_amount"
              className="input input-bordered w-full "
              {...register("price")}
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Product Image</span>
            </label>

            <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("photo", { required: "Product image required" })} />
            {errors.photo && <p className='text-red-600 text-sm'>*{errors.photo?.message}</p>}
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
            {...register("description", { required: "Write product description", minLength: { value: 10, message: "Write minimum 10 character" } })}
          ></textarea>
          {errors.description && <p className='text-red-600 text-sm'>*{errors.description?.message}</p>}
        </div>

        <br />
        <button type='submit' className='btn w-full'>Add</button>
      </form>
    </div>
  </div>
);
};

export default AddProduct;