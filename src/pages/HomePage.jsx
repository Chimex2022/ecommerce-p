import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from '../features/products/productsSlice';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsByCategory('top')); 
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && products.length === 0 && <p>No products available.</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
