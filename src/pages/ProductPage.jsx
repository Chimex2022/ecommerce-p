
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../features/products/productsSlice.js'; 

const ProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { item: product, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (productId) {
      dispatch(getProduct(productId));
    }
  }, [dispatch, productId]);

  return (
    <div className="container mx-auto p-4">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {product && (
        <div className="border rounded shadow-md p-4">
          <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
          <h3 className="text-lg font-bold">{product.title}</h3>
          <p className="text-sm">{product.description}</p>
          <p className="text-lg font-bold">${product.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
