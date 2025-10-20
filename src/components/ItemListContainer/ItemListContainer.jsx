import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const { filtro } = useParams();
    // ESTADO
    const [products, setPorducts] = useState([]);
    // EFECTO
    useEffect(() => {
        fetch('/data/api.json').then( (resp) => {
            if ( !resp.ok ) {
                throw new Error('Error en la llamada a la API');
            }
            return resp.json();
        }).then( (data) => {
            if ( filtro ) {
                let productosFiltrados = [];
                for  (let producto of data ) {
                    if ( producto.categoria.includes(filtro) ) {
                        productosFiltrados.push(producto);
                    }
                }
                setPorducts(productosFiltrados);
            } else {
                setPorducts(data);
            }
        }).catch( (err) => {
            console.log(err);
        })
    }, [filtro]);

    // LLAMADA A UNA API
    return (
        <section>
            <ItemList lista={products}/>
        </section>
    )
}