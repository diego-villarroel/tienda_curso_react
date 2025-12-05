export const validateProduct = (product, fileRequired = true ) => {
  const errors = {};

  if ( !product.name.trim() ) {
    errors.name = 'El nombre es obligatorio';
  }

  if ( !product.precio || product.precio <= 0 ) {
    errors.price = "El precio es obligatorio y debe ser mayor a 0";
  }

  if ( !product.description.trim() ) {
    errors.description = "El producto debe tener una descripción"
  }

  if ( fileRequired && !product.file) {
    errors.file = "El producto debe tener una imagen"
  }

  return errors;
}
