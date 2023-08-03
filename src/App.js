import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar';
import { useState } from 'react';

function App() {
  const [busqueda, setBusqueda] = useState("");
  
  function actualizarBusqueda(e) {
    if(e.keycode == 13) { //enter
      return;
    }
    setBusqueda(e.target.value)
  }

  return (
    <div>
      <Topbar busqueda={busqueda} actualizarBusqueda={actualizarBusqueda}/>
      <div>
        <h>lol</h>
      </div>
    </div>
  );
}

export default App;
