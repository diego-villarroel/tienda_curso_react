import './Nav.css'

export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav_list">
                <li className="nav_item"> <a href="/">Inicio</a></li>
                <li className="nav_item"><a href="/">Productos</a></li>
                <li className="nav_item"><a href="/">Contacto</a></li>
            </ul>
        </nav>
    )
}