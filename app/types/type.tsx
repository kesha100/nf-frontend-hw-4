export interface Rating {
    rate: number;
    count: number;
  }

export interface Product {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    title: string;
    rating: Rating;
    
  }
  