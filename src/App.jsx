import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Header } from './components/Header/Header'

function App() {

    return (
        <>
            <Header />
            <ItemListContainer titulo="Bienvenidos a la tienda" />
        </>
    )
}

export default App
