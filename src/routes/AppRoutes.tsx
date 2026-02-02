import { Route, Routes } from "react-router-dom";
import ProductList from "../pages/ProductPage";
import AddProduct from "../components/AddProduct";
import EditProduct from "../pages/EditProduct";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
            <Route path="" />
        </Routes>
    )
}

export default AppRoutes;