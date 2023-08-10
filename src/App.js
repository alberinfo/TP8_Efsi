import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar';
import Home from './Home';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Contacto from './Contacto';

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [productos, setProductos] = useState([{}]);

  const fetchProductos = async () => {
    const resp = await axios.get("https://dummyjson.com/products?limit=150");
    setProductos(resp.data.products);
    console.log(resp.data.products);
  }

  useEffect(() => {
    fetchProductos();
  }, [])

  function actualizarBusqueda(e) {
    if(e.keycode == 13) { //enter
      return;
    }
    setBusqueda(e.target.value)
  }

  if(productos.length === 0) return (<></>);

  return (
    <>
      <BrowserRouter>
        <Topbar busqueda={busqueda} actualizarBusqueda={actualizarBusqueda}/>
        <Routes>
          <Route path="/home" element={<Home productos={productos}/>}></Route>
          <Route path="/productos" element={<div>lmao</div>}></Route>
          <Route path="/detalle" element={<div>noway</div>}></Route>
          <Route path="/contacto" element={<Contacto/>}></Route>
          <Route path="*" element={<Navigate to="/home" replace/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
