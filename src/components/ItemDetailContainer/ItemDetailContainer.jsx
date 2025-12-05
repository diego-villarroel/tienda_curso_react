import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getProductById  } from '../../services/products';

export const ItemDetailContainer = () => {
  const [detail, SetDetail] = useState({});

  const {id} = useParams();

  useEffect(() => {
    getProductById(id)
      .then( (data) => {
        if (data) {
          SetDetail(data);
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
