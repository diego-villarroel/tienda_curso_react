import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav_list">
                <li className="nav_item">
                    <Link to={"/"}>Inicio</Link>
                    </li>
                <li className="nav_item">
                    <Link to={"/category/amp"}>Amp</Link>
                </li>
                <li className="nav_item">
                    <Link to={"/category/cab"}>Cajas</Link>
                </li>
                <li className='nav_item'>
                    <Link to={"/category/preamp"}>Preamp</Link>
                </li>
            </ul>
        </nav>
    )
}