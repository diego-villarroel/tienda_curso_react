import { useState, useEffect } from 'react'
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = () => {
    // ESTADO
    const [products, setPorducts] = useState([]);
    // EFECTO
    useEffect(() => {
        fetch('/data/api.json').then( (resp) => {
            if (!resp.ok) {
                throw new Error('Error en la llamada a la API');
            }
            return resp.json();
        }).then( (data) => {
            setPorducts(data);
        }).catch( (err) => {
            console.log(err);
        })
    }, []);

    // LLAMADA A UNA API
    return (
        <section>
            <ItemList lista={products}/>
        </section>
    )
}