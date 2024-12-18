import React from 'react';
import { FR } from '../../constants/translations';
import { DeliveryOption } from '../../types';
import { formatPrice } from '../../utils/format';

interface DeliveryOptionsProps {
  options: DeliveryOption[];
  selectedOption: string;
  onSelect: (optionId: string) => void;
}

export function DeliveryOptions({ options, selectedOption, onSelect }: DeliveryOptionsProps) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        {FR.shipping.deliveryTitle}
      </h3>

      <div className="space-y-4">
        {options.map((option) => (
          <div
            key={option.id}
            className="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer hover:border-blue-500"
            onClick={() => onSelect(option.id)}
          >
            <div className="flex items-center h-5">
              <input
                type="radio"
                name="delivery-option"
                checked={selectedOption === option.id}
                onChange={() => onSelect(option.id)}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
            </div>
            <div className="ml-3 flex flex-col flex-1">
              <span className="block text-sm font-medium text-gray-900">
                {option.name}
              </span>
              <span className="block text-sm text-gray-500">
                {option.description}
              </span>
              <span className="block text-sm font-medium text-gray-900 mt-2">
                {option.price === 0 ? FR.shipping.free : formatPrice(option.price)}
              </span>
              {option.estimatedDays && (
                <span className="block text-sm text-gray-500 mt-1">
                  {FR.shipping.estimatedDelivery(option.estimatedDays)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}