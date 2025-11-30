import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext/CartProvider';
import { Carrito } from './components/Carrito/Carrito';
import { Footer } from './components/Footer/Footer';
import { MainLayout } from './layouts/MainLayout';
import { AdminLayout } from './layouts/AdminLayout';
import './App.css';

function App() {

    return (
        <>
            <BrowserRouter>
                <CartProvider>
                    <Routes>
                        <Route element={<MainLayout />} />
                          <Route path='/' element={<ItemListContainer />} />
                          <Route path='/category/:filtro' element={<ItemListContainer />} />
                          <Route path='/detail/:id' element={<ItemDetailContainer/>} />
                          <Route path='/carrito' element={<Carrito/>} />
                        </Routes>
                        <Route path='/admin' element={<AdminLayout />}>
      <Route index />
      <Route path="alta-productos" element={
        <RutasProtegidas>
        </RutasProtegidas>
      }/>
      </Route>
                    </Routes>

                </CartProvider>
            </BrowserRouter>
            <Footer></Footer>
        </>
    )
}

export default App;
