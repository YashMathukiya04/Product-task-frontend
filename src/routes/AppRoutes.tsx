import { Route, Routes } from "react-router-dom";
import ProductList from "../pages/ProductPage";
import AddProduct from "../components/AddProduct";
import EditProduct from "../pages/EditProduct";
import StockPage from "../components/Stock";
import AddStock from "../pages/AddStock";
import StockDetails from "../components/StockDetails";
import ViewProduct from "../components/ViewProduct";
import AddCart from "../components/AddCart";

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
            <Route path="/stock/add/:productId" element={<AddStock />} />
            <Route path="/cart/add" element={<AddCart />} />
        </Routes>
    )
}

export default AppRoutes;