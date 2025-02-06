import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const user = useLoaderData();
  const { _id, name, email } = user;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };

    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://espresso-hub.vercel.app/updateUser/${_id}`, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Updated!",
                text: "User info has been updated.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <Header />
      <div className='flex flex-col h-screen bg-base-200'>
        <div className='mt-20'>
          <div className='max-w-md mx-auto w-full bg-white shadow-xl rounded-3xl sm:p-10 p-6'>
            <div className='text-center mb-4'>
              <p className='text-2xl font-semibold'>Update Your Info</p>
            </div>
            <hr className='mb-3' />

            {/* Form */}
            <form onSubmit={handleUpdate}>
              {/* Name */}
              <div>
                <label
                  className='text-sm font-semibold text-gray-600'
                  htmlFor='name'
                >
                  Name
                </label>
                <input
                  className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm'
                  type='text'
                  name='name'
                  defaultValue={name}
                />
              </div>

              {/* Email */}
              <div className='mt-3'>
                <label
                  className=' text-sm font-semibold text-gray-600 mt-4'
                  htmlFor='email'
                >
                  E-mail
                </label>
                <input
                  className=' w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm'
                  type='email'
                  name='email'
                  defaultValue={email}
                />
              </div>
              {/* Update button */}
              <div className='mt-6'>
                <button
                  className='w-full py-2 px-4 cursor-pointer bg-gray-700 text-white rounded-md hover:bg-gray-600'
                  type='submit'
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
