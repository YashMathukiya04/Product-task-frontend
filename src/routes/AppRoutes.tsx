import { Route, Routes } from "react-router-dom";
import ProductList from "../pages/ProductPage";
import AddProduct from "../components/AddProduct";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
        </Routes>
    )
}

export default AppRoutes;