import { useState, useEffect, use } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [detail, SetDetail] = useState({});

    useEffect(() => {
        fetch('/data/api.json').
        then((res) => {
            if (!res.ok) {
                throw new Error('Error al cargar los datos');
            }
            return res.json();
        }).then((data) => {
            const foundItem = data.find((item) => item.id === '1');
            if (foundItem) {
                SetDetail(foundItem);
            } else {                
                throw new Error('Producto no encontrado');
            }
        }).catch((err) => {
            console.error(err);
        });
    }, [])  
    return (
        <main>
            {Object.keys(detail).length ? (
                <ItemDetail {...detail} />
            ) : (
                <p>...cargando</p>
            )}
        </main>
    )
}