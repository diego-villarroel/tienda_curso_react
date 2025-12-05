import { ProductFormUI } from '../ProductFormUI/ProductFormUI';
import { validateProduct } from '../../../utils/validateProduct';
import { uploadToImgbb } from '../../../services/uploadImages';
import { createProduct } from "../../../services/products";
import { useState } from 'react';

export const ProductFormContainer = () => {
  const [ loading, setLoading ] = useState(false);
  const [ errors, setErrors ] = useState({});
  const [ imagen, setImagen ] = useState(null);
  const [ saved, setSaved ] = useState(false);
  const [ product, setProduct ] = useState({
    name: "",
    precio: "",
    categoria:"",
    descripcion:"",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value })
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);
    console.log(imagen)
    const newErrors = validateProduct({ ...product, imagen});
    if ( Object.keys(newErrors).length > 0 ) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }
    try {
      console.log('entre')
      const imageUrl = await uploadToImgbb(imagen);
      const productData = {
        ...product, precio: Number(product.precio), imageUrl
      };

      await createProduct(productData);
      setSaved(true);
    } catch (err) {
      setErrors({ general: err.message});
    } finally {
      setLoading(false);
      setFile(null);
      setProduct({name:'',descripcion:'',categoria:'',precio:''})
      setTimeout(() => {
        setSaved(false);
      }, 2000);
    }
  }
  return(
    <ProductFormUI producto={product} errors={errors} onChange={HandleChange} onFileChange={setImagen} loading={loading} saved={saved} onSubmit={HandleSubmit}/>
  )
}
