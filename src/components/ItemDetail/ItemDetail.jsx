import { Item } from "../Item/Item"

export const ItemDetail = ({detail}) => {
    return(
        <Item {...detail}>
            <p>{detail.descripcion}</p>
        </Item>
    )
}