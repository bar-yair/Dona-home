import React from 'react';
import ProductPage from '../../Components/productPage';

const bochonokImages = [
  '/img/saunas/preview/barrels/BochonokPremium.jpeg',
  '/img/saunas/preview/barrels/Bochonok.jpeg',
  '/img/saunas/preview/barrels/Bochonok2m.jpeg',
  '/img/saunas/preview/barrels/Bochonok3.5m.jpeg',
];

const bochonokSizes = ['2 מטר', '3.5 מטר', '4 מטר', 'פרימיום'];

const bochonokDescription = `סאונת בוצ'ונוק פרימיום משלבת עיצוב עץ עגול קלאסי עם איכות בנייה גבוהה במיוחד.

הסאונה מתאימה לחצרות פרטיות, צימרים, מתחמי ספא ועוד.

• עץ איכותי עמיד במים ובחום
• בידוד תרמי מתקדם
• ספסלים רחבים ונוחים
• אפשרות לתוספות: תאורה, מערכת שמע, חלונות ועוד

חוויה נורדית אמיתית אצלכם בבית!`;

const BochonokPremiumPage = () => (
  <ProductPage
    images={bochonokImages}
    title="בוצ'ונוק פרימיום"
    sizes={bochonokSizes}
    description={bochonokDescription}
  />
);

export default BochonokPremiumPage;
