import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Header } from './components/Header/Header'

function App() {
    const arrayProductos = [
        { id: 1, nombre: 'Producto 1', precio: 100, descripcion: 'Descripción del producto 1' },
        { id: 2, nombre: 'Producto 2', precio: 200, descripcion: 'Descripción del producto 2' },
        { id: 3, nombre: 'Producto 3', precio: 300, descripcion: 'Descripción del producto 3' },
    ]

    return (
        <>
            <Header />
            <ItemListContainer titulo="Bienvenidos a la tienda" productos={arrayProductos}/>
        </>
    )
}

export default App
