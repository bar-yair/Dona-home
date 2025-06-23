import React from 'react'
import Product from '../Components/product'

const saunas = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div dir="rtl" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Barrels */}
        <Product image="/img/saunas/preview/barrels/Bochonok.jpeg" title="Bochonok" price="100" length="10" />
        <Product image="/img/saunas/preview/barrels/Bochonok2m.jpeg" title="Bochonok 2m" price="150" length="2" />
        <Product image="/img/saunas/preview/barrels/Bochonok3.5m.jpeg" title="Bochonok 3.5m" price="200" length="3.5" />
        <Product image="/img/saunas/preview/barrels/Bochonok4m.jpeg" title="Bochonok 4m" price="250" length="4" />
        <Product image="/img/saunas/preview/barrels/BochonokPremium.jpeg" title="Bochonok Premium" price="300" length="10" />
        <Product image="/img/saunas/preview/barrels/barrel3m.jpeg" title="Barrel 3m" price="180" length="3" />
        <Product image="/img/saunas/preview/barrels/phyto.jpeg" title="Phyto Barrel" price="220" length="10" />
        {/* indoors */}
        <Product image="/img/saunas/preview/indoors/VITA.jpeg" title="VITA Indoor Sauna" price="400" length="10" />
        <Product image="/img/saunas/preview/indoors/VITA2.jpeg" title="VITA 2 Indoor Sauna" price="450" length="10" />
        <Product image="/img/saunas/preview/indoors/VITA3.jpeg" title="VITA 3 Indoor Sauna" price="500" length="10" />
        <Product image="/img/saunas/preview/indoors/ANGLE.jpeg" title="ANGLE Indoor Sauna" price="550" length="10" />
        {/* Quadros */}
        <Product image="/img/saunas/preview/quadros/quadro2m.jpeg" title="Quadro 2m" price="350" length="2" />
        <Product image="/img/saunas/preview/quadros/quadro3.5m.jpeg" title="Quadro 3.5m" price="400" length="3.5" />
        {/*icebaths*/}
        <Product image="/img/saunas/preview/iceBaths/ice79.jpeg" title="Ice Bath 79" price="600" length="10" />
      </div>
    </div>
  )
}

export default saunas