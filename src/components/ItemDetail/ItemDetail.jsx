import { UseCartContext } from "../../context/CartContext/UseCartContext";
import { Item } from "../Item/Item";
import "./ItemDetail.css";

export const ItemDetail = ({detail}) => {
    const { agregarAlCarrito } = UseCartContext();
    
    return(
        <div className="item-detail-card">
            <Item {...detail}>
                <div></div>
                <p>{detail.descripcion}</p>
                <button onClick={() => agregarAlCarrito(detail)}>Agregar a carrito</button>
            </Item>
        </div>
    )
}