import React from 'react';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';
import { FR } from '../constants/translations';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 lg:hidden"
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="ml-4 flex lg:ml-0">
              <span className="text-2xl font-bold text-blue-600">StorePro</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex lg:space-x-8">
            {Object.entries(FR.header.menu).map(([key, value]) => (
              <a 
                key={key}
                href="#" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium"
              >
                {value}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              className="p-2 rounded-md text-gray-600 hover:text-gray-900"
              aria-label={FR.header.search}
            >
              <Search className="h-6 w-6" />
            </button>
            <button 
              className="p-2 rounded-md text-gray-600 hover:text-gray-900"
              aria-label={FR.header.account}
            >
              <User className="h-6 w-6" />
            </button>
            <button 
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 relative"
              aria-label={FR.header.cart}
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}