export const Item = ({ name, precio, descripcion, imageUrl, children }) => {
    return (
        <article>
            <h4>{name}</h4>
            <img src={imageUrl} alt="" height={100} />
            <p>$ {precio}</p>
            {children}
        </article>
    )
}
