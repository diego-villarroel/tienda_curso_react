import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ lista }) => {
  console.log(lista)
  return (
    <div className="item-list">
      { lista === null ? (
        <p>Cargando...</p>
      ) : lista.length ? (
        lista.map( (prod) =>
          <Link className="item-card" to={`/detail/${prod.id}`} key={prod.id} >
            <Item {...prod} >
            </Item>
          </Link>
        )
      ) : ( 
        <p>No hay productos</p>
      )}
    </div>
  )
}
