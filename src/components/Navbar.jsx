import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItemsCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link to="/" className="text-xl font-bold">
            E-Commerce
          </Link>
        </div>
        <div className="flex gap-4">
          <Link to="/login" className="hover:text-gray-400">
            Login
          </Link>
          <Link to="/cart" className="hover:text-gray-400">
            Cart ({cartItemsCount})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
