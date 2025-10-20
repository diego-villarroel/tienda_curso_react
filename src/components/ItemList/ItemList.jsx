import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";
import { UseCartContext } from "../../context/CartContext/UseCartContext";

export const ItemList = ({ lista }) => {
    const { agregarAlCarrito } = UseCartContext();
    return (
        <div className="item-list">
            { lista.length ? (
                lista.map( (prod) =>
                    <Link className="item-card" to={`/detail/${prod.id}`} key={prod.id} >
                        <Item {...prod} >
                            <button onClick={() => agregarAlCarrito(prod)}>Agregar a carrito</button>
                        </Item>
                    </Link>
                )
            ) : ( <p>No hay productos</p>)}
        </div>
    )
}