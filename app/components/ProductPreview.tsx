import React from 'react';
import Link from 'next/link';
import { Product } from '../types/type';

interface ProductPreviewProps {
  product: Product;
}

const productPreview: React.FC<ProductPreviewProps> = ({ product }) => {
  return (
    <div className="bg-white p-6 mb-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">
        <Link href={`/products/${product.id}`}>{product.title}</Link>
      </h2>
      <p className="text-gray-700">{product.description}...</p>
      <p className="text-gray-700">{product.price}...</p>
      <p className="text-gray-700">{product.category}...</p>
      <p className="text-gray-700">{product.image}...</p>
      <p className="mt-4">
        <Link href={`/products/${product.id}`} className="text-blue-500 hover:underline">Read More</Link>
      </p>
    </div>
  );
};

export default productPreview;
