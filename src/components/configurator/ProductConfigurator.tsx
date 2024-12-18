import React, { useState } from 'react';
import { FR } from '../../constants/translations';
import { Product, ProductConfiguration } from '../../types';
import { useCart } from '../../hooks/useCart';

interface ProductConfiguratorProps {
  product: Product;
  onClose: () => void;
}

export function ProductConfigurator({ product, onClose }: ProductConfiguratorProps) {
  const [configuration, setConfiguration] = useState<ProductConfiguration>({
    width: 200,
    height: 200,
    color: 'white',
    motorization: 'manual'
  });
  const { addItem } = useCart();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addItem(product, configuration);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6">
        <h2 className="text-2xl font-bold mb-4">{FR.configurator.title}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {FR.configurator.dimensions}
            </label>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <input
                type="number"
                min="100"
                max="600"
                value={configuration.width}
                onChange={e => setConfiguration(c => ({ ...c, width: Number(e.target.value) }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder={FR.configurator.width}
              />
              <input
                type="number"
                min="100"
                max="400"
                value={configuration.height}
                onChange={e => setConfiguration(c => ({ ...c, height: Number(e.target.value) }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder={FR.configurator.height}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              {FR.configurator.color}
            </label>
            <select
              value={configuration.color}
              onChange={e => setConfiguration(c => ({ ...c, color: e.target.value }))}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {FR.configurator.colors.map(color => (
                <option key={color.value} value={color.value}>
                  {color.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              {FR.configurator.motorization}
            </label>
            <select
              value={configuration.motorization}
              onChange={e => setConfiguration(c => ({ ...c, motorization: e.target.value }))}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {FR.configurator.motorizations.map(motor => (
                <option key={motor.value} value={motor.value}>
                  {motor.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              {FR.common.cancel}
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              {FR.configurator.addToCart}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}