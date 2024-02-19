export default interface ProductI {
  id: number;
  title: string; 
  price: number; 
  category: string;
  description: string;
  image: string;
  rating?: {
    rate: number,
    count: number
  }
}

export interface ProductIa {
  id: number;
  title: string; 
  
}