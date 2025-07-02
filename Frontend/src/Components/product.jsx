import React from 'react';

// Optional: ProductDetails subcomponent for details
const ProductDetails = ({ length, description }) => (
  <div className="text-gray-600 text-sm leading-snug mb-2">
    {length && <div>אורך: {length} מטר</div>}
    {description && <div>{description}</div>}
  </div>
);

const Product = ({ image, title, price, oldPrice, length, description, highlight, children }) => {
  return (
    <div
      dir="rtl"
      className="bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col w-full max-w-md mx-auto overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-orange-300"
    >
      <div className="w-full aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{title}</h2>
        <ProductDetails length={length} description={description} />
        {oldPrice && (
          <div className="text-sm text-gray-400 line-through mb-1">{oldPrice}</div>
        )}
        <div className={`text-xl font-extrabold mb-2 ${highlight ? 'text-orange-600' : 'text-gray-800'}`}>₪{price}</div>
        {children}
      </div>
    </div>
  );
};

export default Product; 