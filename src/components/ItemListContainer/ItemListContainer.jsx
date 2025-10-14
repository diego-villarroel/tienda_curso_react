import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = ({ titulo, productos }) => {
    // ESTADO

    // LLAMADA A UNA API
    return (
        <section>
            <h2>{titulo}</h2>
            <ItemList lista={productos}/>
        </section>
    )
}