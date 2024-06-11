import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/productsService';
import ProductPreview from '../components/ProductPreview';
import { Product } from '../types/type';

const ProductList = () => {
  const { data: products, isLoading } = useQuery(['products'], fetchProducts);

  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product: Product) => (
          <ProductPreview key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
