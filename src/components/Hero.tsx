import React from 'react';
import { FR } from '../constants/translations';

export function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Maison moderne avec store"
        />
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {FR.hero.title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          {FR.hero.subtitle}
        </p>
        <div className="mt-10">
          <a
            href="#products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            {FR.hero.cta}
          </a>
        </div>
      </div>
    </div>
  );
}