export const Item = ({ nombre, precio, descripcion, imgPath, children }) => {
    return (
        <article>
            <h4>{nombre}</h4>
            <img src={imgPath} alt="" height={100}/>
            <p>$ {precio}</p>
            {children}
        </article>
    )
}