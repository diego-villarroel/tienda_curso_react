import { Item } from "../Item/Item"
import "./ItemDetail.css"

export const ItemDetail = ({detail}) => {
    console.log(detail);
    
    return(
        <div className="item-detail-card">
            <Item {...detail}>
                <div></div>
                <p>{detail.descripcion}</p>
                <button>Agregar a carrito</button>
            </Item>
        </div>
    )
}