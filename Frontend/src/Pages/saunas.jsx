import React, { useState } from 'react';
import Product from '../Components/product';
import { Link } from 'react-router-dom';

const categories = [
  { key: 'barrels', label: 'חביות' },
  { key: 'indoors', label: 'סאונות פנים' },
  { key: 'quadros', label: 'קוואדרו' },
  { key: 'icebaths', label: 'אמבטיות קרח' },
];

const products = [
  // Barrels
  {
    category: 'barrels',
    link: '/saunas/bochonok2.5m',
    image: '/img/saunas/preview/barrels/Bochonok.jpeg',
    title: 'בוצ׳ונוק 2.5 מטר',
    price: '23350',
    length: '2.5',
  },
  {
    category: 'barrels',
    link: '/saunas/bochonok-2m',
    image: '/img/saunas/preview/barrels/Bochonok2m.jpeg',
    title: 'בוצ׳ונוק 2 מטר',
    price: '23130',
    length: '2',
  },
  {
    category: 'barrels',
    link: '/saunas/bochonok-3-5m',
    image: '/img/saunas/preview/barrels/Bochonok3.5m.jpeg',
    title: 'בוצ׳ונוק 3.5 מטר',
    price: '30390',
    length: '3.5',
  },
  {
    category: 'barrels',
    link: '/saunas/bochonok-4m',
    image: '/img/saunas/preview/barrels/Bochonok4m.jpeg',
    title: 'בוצ׳ונוק 4 מטר',
    price: '31280',
    length: '4',
  },
  {
    category: 'barrels',
    link: '/saunas/bochonok-premium',
    image: '/img/saunas/preview/barrels/BochonokPremium.jpeg',
    title: 'בוצ׳ונוק פרימיום',
    price: '24660',
    length: 'פרימיום',
  },
  {
    category: 'barrels',
    link: '/saunas/barrel-3m',
    image: '/img/saunas/preview/barrels/barrel3m.jpeg',
    title: 'חבית 3 מטר',
    price: '24060',
    length: '3',
  },
  {
    category: 'barrels',
    link: '/saunas/phyto-barrel',
    image: '/img/saunas/preview/barrels/phyto.jpeg',
    title: 'חבית פיטו',
    price: '13100',
    length: '10',
  },
  // Indoors
  {
    category: 'indoors',
    link: '/saunas/vita-indoor-sauna',
    image: '/img/saunas/preview/indoors/VITA.jpeg',
    title: 'VITA סאונת פנים',
    price: '23770',
    length: '10',
  },
  {
    category: 'indoors',
    link: '/saunas/vita-2-indoor-sauna',
    image: '/img/saunas/preview/indoors/VITA2.jpeg',
    title: 'VITA 2 סאונת פנים',
    price: '21600',
    length: '10',
  },
  {
    category: 'indoors',
    link: '/saunas/vita-3-indoor-sauna',
    image: '/img/saunas/preview/indoors/VITA3.jpeg',
    title: 'VITA 3 סאונת פנים',
    price: '22300',
    length: '10',
  },
  {
    category: 'indoors',
    link: '/saunas/angle-indoor-sauna',
    image: '/img/saunas/preview/indoors/ANGLE.jpeg',
    title: 'ANGLE סאונת פנים',
    price: '23350',
    length: '10',
  },
  // Quadros
  {
    category: 'quadros',
    link: '/saunas/quadro-2m',
    image: '/img/saunas/preview/quadros/quadro2m.jpeg',
    title: 'קוואדרו 2 מטר',
    price: '23450',
    length: '2',
  },
  {
    category: 'quadros',
    link: '/saunas/quadro-3-5m',
    image: '/img/saunas/preview/quadros/quadro3.5m.jpeg',
    title: 'קוואדרו 3.5 מטר',
    price: '31150',
    length: '3.5',
  },
  // Icebaths
  {
    category: 'icebaths',
    link: '/saunas/ice-bath-79',
    image: '/img/saunas/preview/iceBaths/ice79.jpeg',
    title: 'אמבט קרח 79',
    price: '16200',
    length: '10',
  },
];

const Saunas = () => {
  const [selectedCategory, setSelectedCategory] = useState('barrels');
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
        <p className="text-lg text-gray-600 mb-8">בחרו את הסאונה המתאימה לכם מתוך מגוון הקטלוג.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <Link to={product.link} key={product.link} className="block">
              <Product {...product} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Saunas;