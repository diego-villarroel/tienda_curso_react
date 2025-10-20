import { Link } from 'react-router-dom';
import { UseCartContext } from '../../context/CartContext/UseCartContext';
import './Nav.css';

export const Nav = () => {
    const { totalItemsCarrito } = UseCartContext();
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
                <li>
                    <Link to={"/carrito"}> 🛒 </Link>
                    { totalItemsCarrito() > 0 && <span className='contador-carrito'>{totalItemsCarrito}</span> }
                </li>
            </ul>
        </nav>
    )
}