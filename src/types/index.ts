export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  weight: number;
}

export interface ProductConfiguration {
  width: number;
  height: number;
  color: string;
  motorization: string;
}

export interface Address {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  postalCode: string;
  city: string;
}

export interface DeliveryOption {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays?: number;
}