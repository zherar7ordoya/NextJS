import "./App.css";
import Rutina from "./components/Rutina.jsx";
import FilterableProductTable from "./components/FilterableProductTable.jsx";
import PRODUCTS from "./data/products.js";

function App() {
    return <Rutina />;
    //return <FilterableProductTable products={PRODUCTS} />;
}

export default App;
