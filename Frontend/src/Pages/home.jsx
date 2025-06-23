import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/footer';

const Home = () => {
    return (
        <div dir='rtl' className="min-h-screen">
            {/* Modern Hero Section - Full Width and Larger */}
            <div className="bg-[#f9f6f2] w-full py-24">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 px-6 lg:px-24 max-w-none">
                    {/* Text Side */}
                    <div className="flex-1 text-right lg:pr-16">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
                            <span>הפכו את </span>
                            <span className="text-orange-700">החצר</span>
                            <span> שלכם לנווה </span>
                            <span className="text-orange-700">בריאות</span>
                        </h1>
                        <p className="text-2xl text-gray-700 mb-10 max-w-2xl">
                            חווית בריאות נורדית אותנטית עם סאונות החבית האיכותיות שלנו. מיוצרות בעבודת יד בשיטות מסורתיות ובחדשנות מודרנית לרוגע מושלם.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-end">
                            <Link to="/saunas" className="bg-orange-700 hover:bg-orange-800 text-white px-10 py-4 rounded-lg text-xl font-semibold transition duration-300 shadow">
                                צפו בסאונות
                            </Link>
                            <Link to="/contactus" className="border-2 border-orange-700 text-orange-700 hover:bg-orange-50 px-10 py-4 rounded-lg text-xl font-semibold transition duration-300 shadow">
                                קבלו הצעת מחיר
                            </Link>
                        </div>
                    </div>
                    {/* Image Side */}
                    <div className="flex-1 flex justify-center items-center relative w-full lg:w-auto">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white" style={{ maxWidth: 520 }}>
                            <img src="/img/saunas/preview/barrels/BochonokPremium.jpeg" alt="סאונה חבית" className="object-cover w-full h-[420px] md:h-[520px]" />
                            {/* Badge */}
                            <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow flex items-center gap-3 px-6 py-3">
                                <span className="text-orange-600 text-2xl">★</span>
                                <div>
                                    <div className="font-bold text-lg">איכות פרימיום</div>
                                    <div className="text-sm text-gray-500">עבודת יד נורדית</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Health Benefits Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">יתרונות בריאותיים של סאונה</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="text-red-600 text-4xl mb-4">❤️</div>
                            <h3 className="text-xl font-semibold mb-4">בריאות הלב</h3>
                            <p className="text-gray-600">שימוש קבוע בסאונה משפר את בריאות הלב על ידי הגברת זרימת הדם והורדת לחץ הדם, בדומה לפעילות גופנית מתונה.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="text-red-600 text-4xl mb-4">🧘</div>
                            <h3 className="text-xl font-semibold mb-4">הפגת מתחים</h3>
                            <p className="text-gray-600">החום והאדים יוצרים סביבה מושלמת להרפיה, עוזרים להפחית מתח ולשפר את איכות השינה.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="text-red-600 text-4xl mb-4">💪</div>
                            <h3 className="text-xl font-semibold mb-4">התאוששות שרירים</h3>
                            <p className="text-gray-600">מפגשי סאונה עוזרים להרפות שרירים, להפחית דלקות ולהאיץ התאוששות לאחר פעילות גופנית.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="text-red-600 text-4xl mb-4">🧠</div>
                            <h3 className="text-xl font-semibold mb-4">בהירות מנטלית</h3>
                            <p className="text-gray-600">שימוש קבוע בסאונה הוכח כמשפר ריכוז ובהירות מנטלית תוך הפחתת תסמיני חרדה ודיכאון.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="text-red-600 text-4xl mb-4">🛡️</div>
                            <h3 className="text-xl font-semibold mb-4">תמיכה במערכת החיסון</h3>
                            <p className="text-gray-600">החום מגרה את מערכת החיסון, עוזר לגוף להילחם במחלות ולשמור על בריאות כללית.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="text-red-600 text-4xl mb-4">✨</div>
                            <h3 className="text-xl font-semibold mb-4">בריאות העור</h3>
                            <p className="text-gray-600">מפגשי סאונה עוזרים לנקות את העור על ידי פתיחת נקבוביות והגברת זרימת הדם, מה שמוביל למראה בריא יותר.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Categories */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">גלו את הקולקציה שלנו</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Link to="/saunas" className="group">
                            <div className="relative overflow-hidden rounded-lg shadow-lg">
                                <img src="/img/saunas/preview/barrels/BochonokPremium.jpeg" alt="סאונות חבית" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                    <h3 className="text-white text-xl font-semibold">סאונות חבית</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to="/saunas" className="group">
                            <div className="relative overflow-hidden rounded-lg shadow-lg">
                                <img src="/img/saunas/preview/indoors/VITA.jpeg" alt="סאונות פנים" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                    <h3 className="text-white text-xl font-semibold">סאונות פנים</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to="/saunas" className="group">
                            <div className="relative overflow-hidden rounded-lg shadow-lg">
                                <img src="/img/saunas/preview/quadros/quadro3.5m.jpeg" alt="סאונות קוודרו" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                    <h3 className="text-white text-xl font-semibold">סאונות קוודרו</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to="/saunas" className="group">
                            <div className="relative overflow-hidden rounded-lg shadow-lg">
                                <img src="/img/saunas/preview/iceBaths/ice79.jpeg" alt="אמבטיות קרח" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                    <h3 className="text-white text-xl font-semibold">אמבטיות קרח</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">למה לבחור בסאונות שלנו?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">איכות מעולה</h3>
                            <p className="text-gray-600">מיוצר מחומרים איכותיים, מבטיח עמידות ואריכות ימים</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">התקנה מהירה</h3>
                            <p className="text-gray-600">שירות התקנה מקצועי עם הפרעה מינימלית למרחב שלכם</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">מוגן באחריות</h3>
                            <p className="text-gray-600">כיסוי אחריות מקיף לשקט נפשי</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Call to Action */}
            {/* <div className="py-20 ">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-8">מוכנים לשדרג את המרחב שלכם?</h2>
                    <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">הצטרפו לאלפי לקוחות מרוצים ששדרגו את ביתם עם הסאונות היוקרתיות שלנו</p>
                    <Link to="/contactus" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition duration-300 inline-block">
                        צרו קשר היום
                    </Link>
                </div>
            </div> */}

            {/* <Footer /> */}
        </div>
    );
};

export default Home;
