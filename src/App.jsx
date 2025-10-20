import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Header } from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/detail/:id' element={<ItemDetailContainer/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
