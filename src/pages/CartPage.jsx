import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.items.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4 p-4 border">
              <p>{item.title}</p>
              <p>${item.price}</p>
              <button
                className="bg-red-500 text-white px-4 py-2"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <p className="text-xl font-bold">Total: ${cart.total}</p>
          <button className="bg-green-500 text-white px-4 py-2 mt-4">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
