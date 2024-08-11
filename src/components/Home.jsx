import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import napolitana from '../assets/imgs/napolitana.png'
import española from '../assets/imgs/española.png'
import pepperoni from '../assets/imgs/pepperoni.png'


const Home = () => {
    return (
        <div className="tarjetas-home">
            <Header />
            <div className="row mt-5 gap-5">
                <CardPizza 
                name="Napolitana"
                price={5950}
                ingredientes={("mozzarella, tomate, jamón, orégano" )}
                img={napolitana}
                />
                <CardPizza 
                name="Española"
                price={6950}
                ingredientes={("mozzarella, gorgonzola, parmesano, provolone" )}
                img={española}
                />
                <CardPizza 
                name="Pepperoni"
                price={6990}
                ingredientes={("mozzarella, pepperoni, orégano" )}
                img={pepperoni}
                />
            </div>
        </div>
    )
}
export default Home