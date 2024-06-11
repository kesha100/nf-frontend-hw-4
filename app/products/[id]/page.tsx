// src/app/products/[id]/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { fetchProductById } from '../../services/productsService';
import { Product } from '../../types/type';
import { useParams } from 'next/navigation';

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const getProduct = async () => {
        try {
          const data = await fetchProductById(Number(id));
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
      getProduct();
    }
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.title} />
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductDetail;
