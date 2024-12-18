import React from 'react';
import { FR } from '../../constants/translations';
import { formatPrice } from '../../utils/format';
import { Address, DeliveryOption } from '../../types';

interface ShippingSummaryProps {
  address: Address;
  deliveryOption: DeliveryOption;
  subtotal: number;
}

export function ShippingSummary({ address, deliveryOption, subtotal }: ShippingSummaryProps) {
  const total = subtotal + deliveryOption.price;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        {FR.shipping.summary}
      </h3>

      <dl className="space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">{FR.shipping.subtotal}</dt>
          <dd className="text-sm font-medium text-gray-900">{formatPrice(subtotal)}</dd>
        </div>

        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">{FR.shipping.deliveryCost}</dt>
          <dd className="text-sm font-medium text-gray-900">
            {deliveryOption.price === 0 ? FR.shipping.free : formatPrice(deliveryOption.price)}
          </dd>
        </div>

        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
          <dt className="text-base font-medium text-gray-900">{FR.shipping.total}</dt>
          <dd className="text-base font-medium text-gray-900">{formatPrice(total)}</dd>
        </div>
      </dl>

      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-900 mb-2">{FR.shipping.deliveryAddress}</h4>
        <address className="text-sm text-gray-600 not-italic">
          {address.firstName} {address.lastName}<br />
          {address.street}<br />
          {address.postalCode} {address.city}
        </address>
      </div>
    </div>
  );
}