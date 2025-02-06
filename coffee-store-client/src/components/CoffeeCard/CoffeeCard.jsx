import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, onDelete }) => {
  const { _id, coffeeName, supplier, category, taste, details, price, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`https://espresso-hub.vercel.app/coffee/${_id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log(data);
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
            onDelete(_id);
          });
      }
    });
  };

  return (
    <div className='flex gap-3 pr-3 bg-[#F5F4F1] rounded-lg'>
      <div className='w-2/5 flex justify-center items-center'>
        <img
          src={photo}
          className='h-60 w-full object-cover'
          alt={coffeeName}
        />
      </div>
      <div className='flex flex-col justify-center w-2/5'>
        <p className='text-lg font-semibold'>
          Name:{" "}
          <span className='text-base font-normal'>{coffee.coffeeName}</span>
        </p>
        <p className='text-lg font-semibold'>
          Origin: <span className='text-base font-normal'>{supplier}</span>
        </p>
        <p className='text-lg font-semibold'>
          Category: <span className='text-base font-normal'>{category}</span>
        </p>
        <p className='text-lg font-semibold'>
          Taste: <span className='text-base font-normal'>{taste}</span>
        </p>
        <p className='text-lg font-semibold'>
          Details: <span className='text-base font-normal'>{details}</span>
        </p>
        <p className='text-lg font-semibold'>
          Price: <span className='text-xl font-bold'>{price} Taka</span>
        </p>
      </div>
      <div className='flex flex-col justify-center gap-1 w-1/5'>
        <div className='bg-[#D2B48C] text-white btn text-lg mx-5'>
          <FaEye />
        </div>
        <div className='bg-[#3C393B] text-white btn text-lg mx-5'>
          <Link to={`/updateCoffee/${_id}`}>
            <MdModeEdit />
          </Link>
        </div>
        <div
          onClick={() => handleDelete(_id)}
          className='bg-[#EA4744] text-white btn text-lg mx-5'
        >
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CoffeeCard;
