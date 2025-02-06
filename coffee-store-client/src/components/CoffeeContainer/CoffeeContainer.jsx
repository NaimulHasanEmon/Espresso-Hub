import PropTypes from "prop-types";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useState } from "react";

const CoffeeContainer = ({ storedCoffee }) => {
  const [coffees, setCoffees] = useState(storedCoffee);
  const handleOnDelete = (id) => {
    const remaining = coffees.filter((cofe) => cofe._id !== id);
    setCoffees(remaining);
  };

  return (
    <div className='mt-5'>
      <p className='text-center text-3xl font-semibold'>
        Added Coffee: {coffees.length}
      </p>
      <div className='md:grid md:grid-cols-2 gap-8 my-5 items-center'>
        {coffees.map((singleCoffee) => (
          <CoffeeCard
            key={singleCoffee._id}
            coffee={singleCoffee}
            onDelete={handleOnDelete}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

CoffeeContainer.propTypes = {
  storedCoffee: PropTypes.array.isRequired,
};

export default CoffeeContainer;
