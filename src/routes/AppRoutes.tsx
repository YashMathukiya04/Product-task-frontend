import { Route, Routes } from "react-router-dom";
import ProductList from "../pages/ProductPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductList />} />
        </Routes>
    )
}

export default AppRoutes;