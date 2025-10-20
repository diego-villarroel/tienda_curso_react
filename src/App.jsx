import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext/CartProvider';
import { Carrito } from './components/Carrito/Carrito';
import './App.css';

function App() {

    return (
        <>
            <BrowserRouter>
                <CartProvider>
                    <Header />
                    <Routes>
                        <Route path='/' element={<ItemListContainer />} />
                        <Route path='/category/:filtro' element={<ItemListContainer />} />
                        <Route path='/detail/:id' element={<ItemDetailContainer/>} />
                        <Route path='/carrito' element={<Carrito/>} />
                    </Routes>

                </CartProvider>
            </BrowserRouter>
        </>
    )
}

export default App
