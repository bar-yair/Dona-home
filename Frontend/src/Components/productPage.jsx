import React, { useState } from 'react';

const ProductPage = ({ images = [], title, sizes = [], description }) => {
  const [mainImage, setMainImage] = useState(images[0] || '');

  return (
    <div dir="rtl" className="max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-10 items-start">
      {/* Image Gallery */}
      <div className="flex-1 w-full md:w-1/2 flex flex-col items-center">
        <div className="w-full aspect-square bg-gray-100 rounded-2xl shadow mb-4 flex items-center justify-center overflow-hidden">
          <img src={mainImage} alt={title} className="object-contain w-full h-full" />
        </div>
        {/* Thumbnails */}
        <div className="flex gap-2 justify-center flex-wrap">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setMainImage(img)}
              className={`w-16 h-16 rounded-lg border-2 ${mainImage === img ? 'border-orange-500' : 'border-gray-200'} overflow-hidden focus:outline-none`}
            >
              <img src={img} alt={title + ' thumbnail ' + (idx + 1)} className="object-cover w-full h-full" />
            </button>
          ))}
        </div>
      </div>
      {/* Product Info */}
      <div className="flex-1 w-full md:w-1/2 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-orange-700 mb-2">{title}</h1>
        {sizes.length > 0 && (
          <div className="mb-2">
            <h2 className="text-lg font-semibold mb-1">גדלים זמינים:</h2>
            <ul className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <li key={size} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">{size}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
