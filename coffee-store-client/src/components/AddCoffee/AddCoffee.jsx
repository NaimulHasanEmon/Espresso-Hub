import { Link } from "react-router";
import Swal from "sweetalert2";
import Header from "../Header/Header";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const coffeeName = form.coffeeName.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const supply = form.supply.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const newCoffee = {
      coffeeName,
      supplier,
      category,
      supply,
      chef,
      taste,
      details,
      price,
      photo,
    };
    console.log(newCoffee);

    fetch("https://espresso-hub.vercel.app/coffee", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      {/* <div className='text-center'>
        <Link to='/'>
          <button className='btn'>Back To Home</button>
        </Link>
      </div> */}
      <Header></Header>
      <div className='flex flex-col mx-auto py-8 max-w-3xl'>
        <div className='bg-[#EFEBE9] rounded-lg'>
          <form className='p-6 space-y-4' onSubmit={handleAddCoffee}>
            {/* Upper input box's */}
            <div className='md:flex gap-5'>
              {/* Left Side */}
              <div className='md:w-1/2 flex flex-col gap-3'>
                {/* Coffee Name */}
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Name
                  </label>
                  <input
                    className='bg-gray-50 border-none text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
                    required
                    placeholder='Enter coffee name'
                    type='text'
                    name='coffeeName'
                  />
                </div>
                {/* Supplier */}
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Supplier
                  </label>
                  <input
                    className='bg-gray-50 border-none text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
                    required
                    placeholder='Enter coffee supplier'
                    type='text'
                    name='supplier'
                  />
                </div>
                {/* Category */}
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Category
                  </label>
                  <input
                    className='bg-gray-50 border-none text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
                    required
                    placeholder='Enter coffee category'
                    type='text'
                    name='category'
                  />
                </div>
                {/* Total Supply */}
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Total Supply
                  </label>
                  <input
                    className='bg-gray-50 border-none text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
                    required
                    placeholder='Enter coffee supply'
                    type='text'
                    name='supply'
                  />
                </div>
              </div>
              {/* Right Side */}
              <div className='md:w-1/2 flex flex-col gap-3'>
                {/* Chef */}
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Chef
                  </label>
                  <input
                    className='bg-gray-50 border-none text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
                    required
                    placeholder='Enter coffee chef'
                    type='text'
                    name='chef'
                  />
                </div>
                {/* Taste */}
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Taste
                  </label>
                  <input
                    className='bg-gray-50 border-none text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
                    required
                    placeholder='Enter coffee taste'
                    type='text'
                    name='taste'
                  />
                </div>
                {/* Details */}
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Details
                  </label>
                  <input
                    className='bg-gray-50 border-none text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
                    required
                    placeholder='Enter coffee details'
                    type='text'
                    name='details'
                  />
                </div>
                {/* Price */}
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Price
                  </label>
                  <input
                    className='bg-gray-50 border-none text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
                    required
                    placeholder='Enter coffee price'
                    type='number'
                    name='price'
                  />
                </div>
              </div>
            </div>
            {/* Photo */}
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900'>
                Photo
              </label>
              <input
                placeholder='Enter photo URL'
                className='bg-gray-50 border-none text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
                required
                type='text'
                name='photo'
              />
            </div>
            <input
              type='submit'
              value='Add Coffee'
              className='w-full bg-[#D2B48C] border-2 border-black text-[#331A15] font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer'
            />
          </form>
        </div>
      </div>
      <div className='flex justify-center'>
        <Link to='/' className='btn'>
          See Added Coffee
        </Link>
      </div>
    </div>
  );
};

export default AddCoffee;
