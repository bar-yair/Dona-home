import React, { useState } from 'react';
import Product from '../Components/product';

const categories = [
  { key: 'essential', label: 'אביזרים חיוניים' },
  { key: 'comfort', label: 'נוחות' },
  { key: 'decorative', label: 'דקורטיביים' },
  { key: 'firewood', label: 'עץ הסקה' },
];

const products = [
  // Essential Accessories
  {
    category: 'essential',
    image: '/img/accessories/preview/sauna_hat.jpeg',
    title: 'כובע סאונה',
    price: '50',
    length: '10',
  },
  {
    category: 'essential',
    image: '/img/accessories/preview/saunaBucket.jpeg',
    title: 'דלי סאונה',
    price: '80',
    length: '10',
  },
  {
    category: 'essential',
    image: '/img/accessories/preview/saunacarpet.jpeg',
    title: 'שטיח סאונה',
    price: '120',
    length: '10',
  },
  {
    category: 'essential',
    image: '/img/accessories/preview/sandWatch.jpeg',
    title: 'שעון חול',
    price: '40',
    length: '10',
  },
  // Comfort Items
  {
    category: 'comfort',
    image: '/img/accessories/preview/bench.jpeg',
    title: 'ספסל סאונה',
    price: '200',
    length: '10',
  },
  {
    category: 'comfort',
    image: '/img/accessories/preview/headRest.jpeg',
    title: 'משענת ראש',
    price: '60',
    length: '10',
  },
  {
    category: 'comfort',
    image: '/img/accessories/preview/wallPanel.jpeg',
    title: 'פאנל קיר',
    price: '150',
    length: '10',
  },
  // Decorative Items
  {
    category: 'decorative',
    image: '/img/accessories/preview/Lampshade.jpeg',
    title: 'אהיל',
    price: '90',
    length: '10',
  },
  {
    category: 'decorative',
    image: '/img/accessories/preview/vonikOak.jpeg',
    title: 'ווניק אלון',
    price: '70',
    length: '10',
  },
  {
    category: 'decorative',
    image: '/img/accessories/preview/vonik2.jpeg',
    title: 'ווניק 2',
    price: '70',
    length: '10',
  },
  {
    category: 'decorative',
    image: '/img/accessories/preview/blackAlmon.jpeg',
    title: 'שקד שחור',
    price: '70',
    length: '10',
  },
  // Firewood
  {
    category: 'firewood',
    image: '/img/accessories/preview/eurofirewood.jpeg',
    title: 'עץ הסקה אירופאי',
    price: '100',
    length: '10',
  },
];

const SaunaAccessories = () => {
  const [selectedCategory, setSelectedCategory] = useState('essential');
  const filteredProducts = products.filter(p => p.category === selectedCategory);

  return (
    <div className="flex flex-col lg:flex-row-reverse gap-8 max-w-7xl mx-auto px-4 py-8">
      {/* Catalog/Sidebar - appears on top on mobile, right on desktop */}
      <aside className="w-full lg:w-56 flex-shrink-0 mb-6 lg:mb-0 order-1 lg:order-none">
        <h2 dir="rtl" className="text-2xl font-bold mb-4 lg:mb-6">קטלוג</h2>
        <nav dir="rtl" className="flex flex-row flex-wrap lg:flex-col gap-3 pb-2 lg:pb-0">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`text-base font-semibold rounded-full px-5 py-2 text-right transition-all border-none outline-none focus:ring-2 focus:ring-orange-400 whitespace-nowrap ${selectedCategory === cat.key ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800 hover:bg-orange-100'}`}
            >
              {cat.label}
            </button>
          ))}
        </nav>
      </aside>
      {/* Main content */}
      <main dir="rtl" className="flex-1 order-2 lg:order-none">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">{categories.find(c => c.key === selectedCategory)?.label}</h1>
        <p className="text-lg text-gray-600 mb-8">בחרו את האביזר המתאים לכם מתוך מגוון הקטלוג.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <Product key={idx} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SaunaAccessories;