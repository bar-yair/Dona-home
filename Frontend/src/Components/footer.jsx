import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#f5f7fa] text-gray-800 w-full">
      <div dir='rtl' className="w-full px-4 py-12 max-w-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 w-full">
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4">אודותינו</h3>
            <p className="text-sm">אנו מתמחים בסאונות איכותיות, מביאים יוקרה ובריאות לביתכם עם עבודת אומן מקצועית ושירות יוצא מן הכלל.</p>
          </div>
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-orange-700 transition">דף הבית</Link></li>
              <li><Link to="/saunas" className="hover:text-orange-700 transition">סאונות</Link></li>
              <li><Link to="/sauna-accessories" className="hover:text-orange-700 transition">אביזרים</Link></li>
              <li><Link to="/contactus" className="hover:text-orange-700 transition">צור קשר</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4">פרטי התקשרות</h3>
            <ul className="space-y-2 text-sm">
              <li>דוא"ל: info@donasaunas.com</li>
              <li>טלפון: (555) 123-4567</li>
              <li>שעות פעילות: א'-ה' 9:00-18:00</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4">הרשמה לעדכונים</h3>
            <p className="text-sm mb-4">הירשמו לקבלת עדכונים על מוצרים חדשים והצעות מיוחדות.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="כתובת דוא״ל" className="px-4 py-2 rounded bg-white border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <button type="submit" className="bg-orange-700 hover:bg-orange-800 px-4 py-2 rounded text-sm text-white transition">הרשמה</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} דונה סאונות. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 