import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar';
import Home from './Home';
import Productos from './Productos';
import DetalleProducto from './detalleProducto';
import { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Contacto from './Contacto';
import { CarroContext } from './context/CarroContext';
import Carrito from './carrito';

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const fetchProductos = async () => {
    const resp = await axios.get("https://dummyjson.com/products?limit=150");
    setProductos([...resp.data.products]);
  }

  useEffect(() => {
    fetchProductos();
  }, []);

  function actualizarBusqueda(e) {
    if(e.keycode == 13) { //enter
      return;
    }
    setBusqueda(e.target.value);
  }

  if(productos.length === 0) return (<></>);

  if(typeof carrito === "undefined") return (<></>);

  const addToCart = (item, amount) => {
    const isItemInCart = typeof carrito.find((cartItem) => cartItem.id === item.id) !== "undefined"; // check if the item is already in the cart
    console.log(carrito);

    if (isItemInCart) {
    setCarrito(
      carrito.map((elemento) => // if the item is already in the cart, increase the quantity of the item
      elemento.id === item.id
            ? { ...elemento, quantity: elemento.quantity + amount }
            : elemento // otherwise, return the cart item
        )
    );
    } else {
      setCarrito([...carrito, { ...item, quantity: amount }]); // if the item is not in the cart, add the item to the cart
    }
  }
  
  const removeFromCart = (item) => {
    const isItemInCart = carrito.find((elemento) => elemento.id === item.id);
  
    if (isItemInCart.quantity === 1) {
      setCarrito(carrito.filter((elemento) => elemento.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
    } else {
      setCarrito(
        carrito.map((elemento) =>
          elemento.id === item.id
            ? { ...elemento, quantity: elemento.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
            : elemento
        )
      );
    }

  }

  const fullyRemoveFromCart = (item) => {
    setCarrito(carrito.filter(elemento => elemento.id !== item.id));
  }

  const clearCart = () => {
    setCarrito([]); // set the cart items to an empty array
  }
  
  const getCartTotal = () => {
    return carrito.reduce((total, item) => total + item.price * item.quantity, 0); // calculate the total price of the items in the cart
  }

  return (
    <>
      <BrowserRouter>
        <CarroContext.Provider value={{carrito, addToCart, removeFromCart, fullyRemoveFromCart, clearCart, getCartTotal}}>
          <Topbar busqueda={busqueda} actualizarBusqueda={actualizarBusqueda}/>
          <Routes>
            <Route path="/home" element={<Home productos={productos}/>}></Route>
            <Route path="/productos" element={<Productos productos={productos}/>}></Route>
            <Route path="/detalle" element={<DetalleProducto/>}></Route>
            <Route path="/contacto" element={<Contacto/>}></Route>
            <Route path="/carrito" element={<Carrito/>}></Route>
            <Route path="*" element={<Navigate to="/home" replace/>}/>
          </Routes>
        </CarroContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
