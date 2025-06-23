import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Saunas from './Pages/saunas';
import SaunaAccessories from './Pages/sauna-accessories';
import ParketDeck from './Pages/parket-deck';
import Gazebos from './Pages/gazebos';
import ContactUs from './Pages/contactus';
import Home from './Pages/home';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/saunas" element={<Saunas />} />
            <Route path="/sauna-accessories" element={<SaunaAccessories />} />
            <Route path="/parket-deck" element={<ParketDeck />} />
            <Route path="/gazebos" element={<Gazebos />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
