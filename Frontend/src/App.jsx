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
import BochonokPremiumPage from './Pages/saunasCollection/bochonokPremium';
import Bochonok2mPage from './Pages/saunasCollection/bochonok2m';
import Bochonok35mPage from './Pages/saunasCollection/bochonok35m';
import Bochonok4mPage from './Pages/saunasCollection/bochonok4m';
import Barrel3mPage from './Pages/saunasCollection/barrel3m';
import PhytoBarrelPage from './Pages/saunasCollection/phytoBarrel';
import VitaIndoorSaunaPage from './Pages/saunasCollection/vitaIndoorSauna';
import Vita2IndoorSaunaPage from './Pages/saunasCollection/vita2IndoorSauna';
import Vita3IndoorSaunaPage from './Pages/saunasCollection/vita3IndoorSauna';
import AngleIndoorSaunaPage from './Pages/saunasCollection/angleIndoorSauna';
import Quadro2mPage from './Pages/saunasCollection/quadro2m';
import Quadro35mPage from './Pages/saunasCollection/quadro35m';
import IceBath79Page from './Pages/saunasCollection/iceBath79';
import Bochonok25mPage from './Pages/saunasCollection/bochonok25m';

function Layout({ children }) {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {children}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saunas" element={<Saunas />} />
          <Route path="/sauna-accessories" element={<SaunaAccessories />} />
          <Route path="/parket-deck" element={<ParketDeck />} />
          <Route path="/gazebos" element={<Gazebos />} />
          <Route path="/contactus" element={<ContactUs />} />
          
          {/* saunas collection paths */}
          <Route path="/saunas/bochonok-premium" element={<BochonokPremiumPage />} />
          <Route path="/saunas/bochonok2.5m" element={<Bochonok25mPage />} />
          <Route path="/saunas/bochonok-2m" element={<Bochonok2mPage />} />
          <Route path="/saunas/bochonok-3-5m" element={<Bochonok35mPage />} />
          <Route path="/saunas/bochonok-4m" element={<Bochonok4mPage />} />
          <Route path="/saunas/barrel-3m" element={<Barrel3mPage />} />
          <Route path="/saunas/phyto-barrel" element={<PhytoBarrelPage />} />
          <Route path="/saunas/vita-indoor-sauna" element={<VitaIndoorSaunaPage />} />
          <Route path="/saunas/vita-2-indoor-sauna" element={<Vita2IndoorSaunaPage />} />
          <Route path="/saunas/vita-3-indoor-sauna" element={<Vita3IndoorSaunaPage />} />
          <Route path="/saunas/angle-indoor-sauna" element={<AngleIndoorSaunaPage />} />
          <Route path="/saunas/quadro-2m" element={<Quadro2mPage />} />
          <Route path="/saunas/quadro-3-5m" element={<Quadro35mPage />} />
          <Route path="/saunas/ice-bath-79" element={<IceBath79Page />} />
          <Route path="/saunas/bochonok2.5m" element={<Bochonok25mPage />} />
          


        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
