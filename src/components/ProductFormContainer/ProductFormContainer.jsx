export const ProductFormContainer = () => {
  return(
    <form action="">
      <h2>Alta de Productos</h2>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="price">Precio:</label>
        <input type="number" name="price" id="price" />
      </div>
      <div>
        <label htmlFor="description">Descripción:</label>
        <input type="text" name="description" id="description" />
      </div>
      <div>
        <label htmlFor="image">Imagen:</label>
        <input type="text" name="image" id="image" />
      </div>
      <button type="submit">Agregar Producto</button>
    </form>
  )
}
