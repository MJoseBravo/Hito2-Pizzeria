
const CardPizza = ({name, price, ingredientes, img}) => {
    return (
        <div className="tarjetas">
            <div>
                <img src={img} alt={name} />
            </div>
            <div className="tarjeta-pizza">
                <h3>{name}</h3>
                <p>Ingredientes:</p>
                <p>{ingredientes}</p>
                <p>{numberWithCommas(price)}</p>
                <button>Ver más</button>
                <button>Añadir al carro</button>  
            </div>
        </div>
    )
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default CardPizza
