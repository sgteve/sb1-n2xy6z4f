import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types';

interface CartItem extends Product {
  quantity: number;
  configuration?: ProductConfiguration;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Product, configuration?: ProductConfiguration) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item, configuration) => {
        const items = get().items;
        const existingItem = items.find(i => i.id === item.id);
        
        if (existingItem) {
          set({
            items: items.map(i => 
              i.id === item.id 
                ? { ...i, quantity: i.quantity + 1 }
                : i
            )
          });
        } else {
          set({ items: [...items, { ...item, quantity: 1, configuration }] });
        }
      },
      removeItem: (itemId) => {
        set({ items: get().items.filter(i => i.id !== itemId) });
      },
      updateQuantity: (itemId, quantity) => {
        set({
          items: get().items.map(i => 
            i.id === itemId ? { ...i, quantity } : i
          )
        });
      },
      clearCart: () => set({ items: [] }),
      get total() {
        return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      }
    }),
    { name: 'cart-storage' }
  )
);