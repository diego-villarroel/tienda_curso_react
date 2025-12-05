export const ProductFormUI = ({ producto, errors, loading, onChange, onFileChange, onSubmit } ) => {
  return (
    <section>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" value="">
        </div>
        <div>
          <label htmlFor="precio">Precio</label>
          <input type="text" name="precio" value="" placeholder="$">
        </div>
        <div>
          <label for="descripcion">Descrioción</label>
          <input type="descripcion" name="descripcion" id="descripcion" value="">
        </div>
        <button type="submit"></button>
      </form>
    </section>
  )
}
