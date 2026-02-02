import { Route, Routes } from "react-router-dom";
import ProductList from "../pages/ProductPage";
import AddProduct from "../components/AddProduct";
import EditProduct from "../pages/EditProduct";
import StockPage from "../components/Stock";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
            <Route path="/stock" element={<StockPage />} />
        </Routes>
    )
}

export default AppRoutes;