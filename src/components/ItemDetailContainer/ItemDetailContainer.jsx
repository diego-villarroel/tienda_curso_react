import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [detail, SetDetail] = useState({});

    const {id} = useParams();

    useEffect(() => {
        fetch('/data/api.json').
        then((res) => {
            if (!res.ok) {
                throw new Error('Error al cargar los datos');
            }
            return res.json();
        }).then((data) => {
            const foundItem = data.find((item) => parseInt(item.id) === parseInt(id));
            
            if (foundItem) {                
                SetDetail(foundItem);
            } else {                
                throw new Error('Producto no encontrado');
            }
        }).catch((err) => {
            console.error(err);
        });
    }, [id]);
    return (
        
        <main>
            {Object.keys(detail).length ? (
                <ItemDetail detail={detail} />
            ) : (
                <p>...cargando</p>
            )}
        </main>
    )
}