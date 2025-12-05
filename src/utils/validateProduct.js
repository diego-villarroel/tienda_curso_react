export const validateProduct = (product, fileRequired = true ) => {
  const errors = {};

  if ( !product.name.trim() ) {
    errors.name = 'El nombre es obligatorio';
  }

  if ( !product.precio || product.precio <= 0 ) {
    errors.price = "El precio es obligatorio y debe ser mayor a 0";
  }

  if ( !product.descripcion.trim() ) {
    errors.descripcion = "El producto debe tener una descripción"
  }

  if ( !product.categoria.trim() ) {
    errors.categoria = "El producto debe tener una categoría"
  }

  if ( fileRequired && !product.imagen) {
    errors.imagen = "El producto debe tener una imagen"
  }

  return errors;
}
