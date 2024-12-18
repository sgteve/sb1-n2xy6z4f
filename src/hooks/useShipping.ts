import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Address, DeliveryOption } from '../types';
import { calculateShippingCost, validateAddress } from '../services/shipping';
import { FR } from '../constants/translations';

interface ShippingState {
  address: Address;
  selectedDeliveryOption: string;
  errors: string[];
  setAddress: (address: Address) => void;
  setDeliveryOption: (optionId: string) => void;
  validateForm: () => boolean;
  getDeliveryOptions: (totalWeight: number, totalPrice: number) => DeliveryOption[];
}

const DEFAULT_ADDRESS: Address = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  street: '',
  postalCode: '',
  city: ''
};

export const useShipping = create<ShippingState>()(
  persist(
    (set, get) => ({
      address: DEFAULT_ADDRESS,
      selectedDeliveryOption: 'standard',
      errors: [],

      setAddress: (address) => {
        set({ address, errors: [] });
      },

      setDeliveryOption: (optionId) => {
        set({ selectedDeliveryOption: optionId });
      },

      validateForm: () => {
        const errors = validateAddress(get().address);
        set({ errors });
        return errors.length === 0;
      },

      getDeliveryOptions: (totalWeight: number, totalPrice: number) => {
        const { address } = get();
        const baseShippingCost = calculateShippingCost(address, totalWeight, totalPrice);

        return [
          {
            id: 'standard',
            name: FR.shipping.options.standard.name,
            description: FR.shipping.options.standard.description,
            price: baseShippingCost,
            estimatedDays: 5
          },
          {
            id: 'express',
            name: FR.shipping.options.express.name,
            description: FR.shipping.options.express.description,
            price: baseShippingCost * 1.5,
            estimatedDays: 2
          },
          {
            id: 'installation',
            name: FR.shipping.options.installation.name,
            description: FR.shipping.options.installation.description,
            price: baseShippingCost + 299,
            estimatedDays: 7
          }
        ];
      }
    }),
    { name: 'shipping-storage' }
  )
);