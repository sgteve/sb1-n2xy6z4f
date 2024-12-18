import React from 'react';
import { FR } from '../constants/translations';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover object-center group-hover:opacity-75 transition-opacity"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        <p className="mt-2 text-xl font-bold text-blue-600">
          {product.price} {FR.products.currency}
        </p>
        <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          {FR.products.configure}
        </button>
      </div>
    </div>
  );
}