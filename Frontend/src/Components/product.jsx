import React from 'react';

const Product = ({ image, title, price, length }) => {
  return (
    <div 
      dir="rtl" 
      className="border border-gray-200 rounded-lg p-4 max-w-xs bg-white shadow-md m-4 
                 transition-all duration-300 ease-in-out 
                 hover:scale-105 hover:shadow-xl hover:border-green-200"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold mb-1">דגם: {title}</h2>
      <p className="text-gray-500 mb-1">אורך: {length}</p>
      <p className="font-bold text-base">₪{price}</p>
    </div>
  );
};

export default Product; 