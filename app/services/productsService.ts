import api from './api';
import { Product } from '../types/type';
import { useQuery, UseQueryResult } from '@tanstack/react-query';


export const fetchProducts = async () => {
    const response = await api.get('/');
    return response.data;
  };
  
// export const fetchProducts = async (): Promise<Product[]> => {
//     try {
//       const response = await api.get('/');
//       if (response.status === 200) {
//         const { data } = response;
//         console.log('API response data:', data);  // Log the entire response data
  
//         // Since data is directly an array of products, we can return it directly
//         if (Array.isArray(data)) {
//           return data as Product[];
//         } else {
//           throw new Error('Products data is not in the expected format');
//         }
//       } else {
//         throw new Error(`Error: ${response.status} - ${response.statusText}`);
//       }
//     } catch (error) {
//       console.error('Error fetching Products:', error);
//       throw error;
//     }
//   };


//   export const fetchProductById = async (ProductId: number): Promise<Product> => {
//     try {
//       const response = await api.get(`/${ProductId}`);
//       if (response.status === 200) {
//         return response.data as Product;
//       } else {
//         throw new Error(`Error: ${response.status} - ${response.statusText}`);
//       }
//     } catch (error) {
//       console.error('Error fetching Product by ID:', error);
//       throw error;
//     }
//   };
  