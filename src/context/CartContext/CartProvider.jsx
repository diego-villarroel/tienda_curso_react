import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const existeEnCarrito = (id) => {
        return carrito.some((prod) => prod.id === id);
    }

    const agregarAlCarrito = (item) => {
        if (existeEnCarrito(item.id)) {
            alert("El producto ya se encuentra en el carrito");
            return;
        }
        setCarrito([...carrito,item]);
        alert("Producto agregado al carrito");
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const totalItemsCarrito = () => {
        if (carrito.length) {
            return carrito.length;
        }
    }

    const valores = { carrito, agregarAlCarrito, vaciarCarrito, totalItemsCarrito };
    return (
        <CartContext.Provider value={valores}>{children}</CartContext.Provider>
    )
}