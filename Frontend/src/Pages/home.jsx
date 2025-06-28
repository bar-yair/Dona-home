import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/footer';

const infoSections = [
    {
        title: 'בריאות הגוף והנפש',
        text: 'החום של הסאונה עוזר להרפיית שרירים, שיפור זרימת הדם, ניקוי רעלים מהגוף והפגת מתחים. חווית הסאונה תורמת לבריאות כללית טובה יותר ולתחושת רוגע עמוקה.',
        img: '/img/background2.png',
    },
    {
        title: 'מסורת נורדית יוקרתית',
        text: 'הסאונה היא חלק בלתי נפרד מהתרבות הנורדית, מסמלת איכות חיים, קהילה ורוגע. אנו מביאים את המסורת הזו אליכם עם עיצוב מוקפד וחומרים איכותיים.',
        img: '/img/background2.png',
    },
    {
        title: 'פינוק יומיומי בבית',
        text: 'הפכו את הבית או החצר למקום של פינוק, רוגע ובריאות. סאונה פרטית מאפשרת לכם ליהנות מהיתרונות בכל יום, מתי שנוח לכם, עם המשפחה או לבד.',
        img: '/img/background2.png',
    },
];

const Home = () => {
    return (
        <div
            dir='rtl'
            className="min-h-screen pt-24 relative"
            style={{
                backgroundImage: `linear-gradient(rgba(255,185,64,0.6), rgba(255,185,64,0.6)), url('/img/background2.png')`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Hero Section */}
            <div className="relative w-full flex flex-col items-center justify-center pt-10 pb-20 mt-24 mb-48">
                {/* Logo or Sauna Image */}
                <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">ברוכים הבאים לעולם הסאונות</h1>
                <h2 className="text-2xl font-semibold text-center text-black mb-4">הדרך המושלמת לבריאות, רוגע ואיכות חיים</h2>
                <p className="text-lg text-center text-black mb-8 max-w-2xl mx-auto">
                    סאונה איכותית לבית או לחצר משדרגת את הבריאות, משפרת את איכות החיים ומביאה חוויה נורדית יוקרתית לכל המשפחה. הצטרפו לאלפי לקוחות מרוצים שכבר נהנים מסאונה פרטית!
                </p>
                <Link to="/saunas" className="bg-white text-orange-600 hover:bg-orange-100 font-bold px-8 py-3 rounded-full shadow transition text-lg">
                    צפו בסאונות שלנו
                </Link>
            </div>

            {/* Info Cards Section */}
            <div className="w-full bg-white rounded-t-3xl shadow-lg -mt-10 pb-16 pt-10 px-4 flex flex-col items-center">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center border-t-4 border-orange-400">
                        <div className="text-4xl mb-4">❤️</div>
                        <h3 className="text-xl font-bold mb-2 text-center">בריאות ורוגע</h3>
                        <p className="text-gray-600 text-center">הסאונה משפרת את הבריאות הכללית, תורמת להרפיית שרירים, הפגת מתחים וחיזוק מערכת החיסון.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center border-t-4 border-orange-400">
                        <div className="text-4xl mb-4">🛠️</div>
                        <h3 className="text-xl font-bold mb-2 text-center">איכות ללא פשרות</h3>
                        <p className="text-gray-600 text-center">הסאונות שלנו מיוצרות בעבודת יד מחומרים מובחרים, עם דגש על עמידות, בידוד ועיצוב יוקרתי.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center border-t-4 border-orange-400">
                        <div className="text-4xl mb-4">⚡</div>
                        <h3 className="text-xl font-bold mb-2 text-center">התקנה קלה ומהירה</h3>
                        <p className="text-gray-600 text-center">התקנה מקצועית ומהירה אצלכם בבית או בחצר, עם ליווי אישי לכל אורך הדרך.</p>
                    </div>
                </div>
            </div>

            {/* Sauna Info Sections */}
            <div className="w-full flex flex-col gap-16 py-16 px-4 max-w-6xl mx-auto">
                {infoSections.map((section, idx) => (
                    <div
                        key={section.title}
                        className={`flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className="flex-1 flex items-center justify-center">
                            <img src={section.img} alt={section.title} className="rounded-2xl shadow-lg w-full max-w-md object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center text-right">
                            <h3 className="text-2xl font-bold mb-4 text-orange-700">{section.title}</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">{section.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Home;
