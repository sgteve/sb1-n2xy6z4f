import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { FR } from '../../constants/translations';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/format';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, total } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 overflow-hidden z-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />
        
        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl">
              <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">
                    {FR.cart.title}
                  </h2>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500"
                    onClick={onClose}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-8">
                  {items.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-4 text-gray-500">{FR.cart.empty}</p>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {items.map((item) => (
                          <li key={item.id} className="py-6 flex">
                            <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-md">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <div className="ml-4 flex-1 flex flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>{item.name}</h3>
                                  <p className="ml-4">{formatPrice(item.price * item.quantity)}</p>
                                </div>
                                {item.configuration && (
                                  <p className="mt-1 text-sm text-gray-500">
                                    {`${item.configuration.width}x${item.configuration.height}cm, 
                                    ${FR.configurator.colors.find(c => c.value === item.configuration?.color)?.label}`}
                                  </p>
                                )}
                              </div>
                              <div className="flex-1 flex items-end justify-between text-sm">
                                <div className="flex items-center">
                                  <label htmlFor={`quantity-${item.id}`} className="mr-2">
                                    {FR.cart.quantity}
                                  </label>
                                  <select
                                    id={`quantity-${item.id}`}
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                                    className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                  >
                                    {[1, 2, 3, 4, 5].map(num => (
                                      <option key={num} value={num}>{num}</option>
                                    ))}
                                  </select>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeItem(item.id)}
                                  className="font-medium text-blue-600 hover:text-blue-500"
                                >
                                  {FR.cart.remove}
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {items.length > 0 && (
                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>{FR.cart.total}</p>
                    <p>{formatPrice(total)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    {FR.cart.shipping}
                  </p>
                  <div className="mt-6">
                    <button
                      className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      {FR.cart.checkout}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}