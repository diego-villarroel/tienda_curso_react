import { UseCartContext } from "../../context/CartContext/UseCartContext"

export const Carrito = () => {
    const { carrito, vaciarCarrito } = UseCartContext();
    
    return (
        <div>
            <h3>Carrito</h3>
            { carrito.length ? (
                carrito.map( 
                    (prod) => (
                        <div key={prod.id}>
                            <p>{prod.nombre} - ${prod.precio}</p>
                        </div>
                    ) 
                )
            ) : ( <p> Carrito Vacio</p>) }
            { carrito.length ? (
                <div>
                    <button>Finalizar Compra</button> 
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                </div>
            ) : null }
        </div>
    )
}