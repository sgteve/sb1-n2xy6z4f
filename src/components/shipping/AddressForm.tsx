import React from 'react';
import { FR } from '../../constants/translations';
import { Address } from '../../types';

interface AddressFormProps {
  address: Address;
  onChange: (address: Address) => void;
  errors: string[];
}

export function AddressForm({ address, onChange, errors }: AddressFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...address, [name]: value });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">
        {FR.shipping.addressTitle}
      </h3>

      {errors.length > 0 && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                {FR.shipping.errorTitle}
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <ul className="list-disc pl-5 space-y-1">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            {FR.shipping.firstName}
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={address.firstName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            {FR.shipping.lastName}
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={address.lastName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {FR.shipping.email}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={address.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            {FR.shipping.phone}
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={address.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="street" className="block text-sm font-medium text-gray-700">
            {FR.shipping.street}
          </label>
          <input
            type="text"
            name="street"
            id="street"
            value={address.street}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
            {FR.shipping.postalCode}
          </label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            value={address.postalCode}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            {FR.shipping.city}
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={address.city}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}