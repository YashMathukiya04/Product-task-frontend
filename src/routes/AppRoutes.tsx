import { Route, Routes } from "react-router-dom";
import ProductList from "../pages/ProductPage";
import AddProduct from "../components/AddProduct";
import EditProduct from "../pages/EditProduct";
import StockPage from "../components/Stock";
import AddStock from "../pages/AddStock";
import StockDetails from "../components/StockDetails";
import ViewProduct from "../components/ViewProduct";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="product/:id" element={<ViewProduct />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
            <Route path="/stock" element={<StockPage />} >
                <Route path="view/:id" element={<StockDetails />} />
            </Route>
            <Route path="/stock/add" element={<AddStock />} />
        </Routes>
    )
}

export default AppRoutes;