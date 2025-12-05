import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../../services/products"

export const ItemListContainer = () => {
  const { filtro } = useParams();
  // ESTADO
  const [products, setPorducts] = useState(null);
  // EFECTO
  useEffect(() => {
    getProducts( filtro )
      .then( (data) => setPorducts(data) )
      .catch( (err) => { console.log(err); })
    }, [filtro]);

    // LLAMADA A UNA API
    return (
        <section>
            <ItemList lista={products}/>
        </section>
    )
}
