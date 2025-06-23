import React from 'react'
import Product from '../Components/product'

const saunaAccessories = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div dir="rtl" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Essential Accessories */}
        <Product image="/img/accessories/preview/sauna_hat.jpeg" title="Sauna Hat" price="50" length="10" />
        <Product image="/img/accessories/preview/saunaBucket.jpeg" title="Sauna Bucket" price="80" length="10" />
        <Product image="/img/accessories/preview/saunacarpet.jpeg" title="Sauna Carpet" price="120" length="10" />
        <Product image="/img/accessories/preview/sandWatch.jpeg" title="Sand Watch" price="40" length="10" />
        
        {/* Comfort Items */}
        <Product image="/img/accessories/preview/bench.jpeg" title="Sauna Bench" price="200" length="10" />
        <Product image="/img/accessories/preview/headRest.jpeg" title="Head Rest" price="60" length="10" />
        <Product image="/img/accessories/preview/wallPanel.jpeg" title="Wall Panel" price="150" length="10" />
        
        {/* Decorative Items */}
        <Product image="/img/accessories/preview/Lampshade.jpeg" title="Lampshade" price="90" length="10" />
        <Product image="/img/accessories/preview/vonikOak.jpeg" title="Vonik Oak" price="70" length="10" />
        <Product image="/img/accessories/preview/vonik2.jpeg" title="Vonik 2" price="70" length="10" />
        <Product image="/img/accessories/preview/blackAlmon.jpeg" title="Black Almond" price="70" length="10" />
        
        {/* Firewood */}
        <Product image="/img/accessories/preview/eurofirewood.jpeg" title="Euro Firewood" price="100" length="10" />
      </div>
    </div>
  )
}

export default saunaAccessories