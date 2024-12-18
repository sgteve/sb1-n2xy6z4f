import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
      </main>
    </div>
  );
}

export default App;