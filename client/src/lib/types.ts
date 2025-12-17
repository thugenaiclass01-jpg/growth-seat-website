export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  images: string[];
  colors: string[];
  features: string[];
  dimensions: string;
  material: string;
  tag?: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
}
