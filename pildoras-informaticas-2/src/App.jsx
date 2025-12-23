import "./App.css";
import { useState } from "react";
import Rutina from "./components/Rutina.jsx";
import FilterableProductTable from "./components/FilterableProductTable.jsx";
import PRODUCTS from "./data/products.js";
//
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Inicio from "./components/rutas/Inicio.jsx";
import Productos from "./components/rutas/Productos.jsx";
import Contactos from "./components/rutas/Contactos.jsx";

function App() {
    //return <Rutina />;
    //return <FilterableProductTable products={PRODUCTS} />;
    //******************************************************
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/productos">Productos</Link>
                    </li>
                    <li>
                        <Link to="/contactos">Contactos</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/contactos" element={<Contactos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
