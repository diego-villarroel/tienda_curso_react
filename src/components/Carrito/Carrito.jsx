import { UseCartContext } from "../../context/CartContext/UseCartContext";

export const Carrito = () => {
    const { carrito, vaciarCarrito, eliminarItemCarrito } = UseCartContext();
    
    return (
        <div>
            <h3>Carrito</h3>
            { carrito.length ? (
                carrito.map( 
                    (prod) => (
                        <div key={prod.id}>
                            <p><img src={prod.imgPath} alt="" height={40} /> {prod.nombre} - ${prod.precio} <button onClick={() => eliminarItemCarrito(prod.id)}>Eliminar</button></p>
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