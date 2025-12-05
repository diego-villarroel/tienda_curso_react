export const ProductFormUI = ({ producto, errors, loading, saved, onChange, onFileChange, onSubmit } ) => {
  return (
    <section>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" value={producto.name} onChange={onChange}/>
          { errors.name && <p className="error">{errors.name}</p> }
        </div>
        <div>
          <label htmlFor="precio">Precio</label>
          <input type="text" name="precio" id="precio" placeholder="$" value={producto.precio} onChange={onChange}/>
          { errors.precio && <p className="error">{errors.precio}</p> }
        </div>
        <div>
          <label htmlFor="categoria">Categoria</label>
          <select name="categoria" id="categoria" value={producto.categoria} onChange={onChange}>
            <option value="" selected>Eliga una categoría</option>
            <option value="amp">Amplificador</option>
            <option value="cab">Caja</option>
            <option value="preamp">Preamplificador</option>
          </select>
          { errors.categoria && <p className="error">{errors.categoria}</p>}
        </div>
        <div>
          <label htmlFor="descripcion">Descripción</label>
          <textarea row="4" type="descripcion" name="descripcion" id="descripcion" value={producto.descripcion} onChange={onChange}></textarea>
          { errors.descripcion && <p className="error">{errors.descripcion}</p> }
         </div>
        <div>
          <label htmlFor="imagen">Imagen</label>
          <input type="file" name="imagen" id="imagen" onChange={ (e) => onFileChange(e.target.files[0]) } accept="image/*" />
          { errors.imagen && <p className="error">{errors.imagen}</p> }
        </div>
        <button type="submit" disable={loading.toString()}>
          {loading ? "Guardando..." : "Guardar Producto"}
        </button>
        { saved && <p className="correct">Producto guardado correctamente</p> }
      </form>
    </section>
  )
}
