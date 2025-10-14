export const Item = ({ nombre, precio, descripcion, children }) => {
    return (
        <article>
            <h4>{nombre}</h4>
            <p>$ {precio}</p>
            <p>{descripcion}</p>
            {children}
        </article>
    )
}