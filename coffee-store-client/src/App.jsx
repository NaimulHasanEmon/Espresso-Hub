import { Link } from "react-router-dom";
import CoffeeContainer from "./components/CoffeeContainer/CoffeeContainer";
import PropTypes from 'prop-types';

function App({storedCoffee}) {
  return (
    <div>
      <div className='max-w-6xl mx-auto flex flex-col justify-center my-5'>
        <p className='text-6xl text-yellow-900 text-center mb-10'>
          Welcome To Our Coffee Shop
        </p>
        <div className='flex justify-center'>
          <Link to='/addCoffee' className='btn'>
            Add Coffee
          </Link>
        </div>
        <div className=''>
          <CoffeeContainer
            key={storedCoffee._id}
            storedCoffee={storedCoffee}
          ></CoffeeContainer>
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  storedCoffee: PropTypes.object.isRequired,
};

export default App;
