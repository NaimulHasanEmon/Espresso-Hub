import { Link, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://espresso-hub.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log(data);
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Header></Header>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr className='text-xl'>
              <th></th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx} className='hover:bg-base-300'>
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>
                  <div className='flex gap-1'>
                    <div className='bg-[#D2B48C] text-white btn text-lg'>
                      <FaEye />
                    </div>
                    <div className='bg-[#3C393B] text-white btn text-lg'>
                      <Link to={`/updateUser/${user._id}`}>
                        <MdModeEdit />
                      </Link>
                    </div>
                    <div
                      onClick={() => handleDelete(user._id)}
                      className='bg-[#EA4744] text-white btn text-lg'
                    >
                      <MdDelete />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
