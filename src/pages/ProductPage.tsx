
import { useEffect, useState } from 'react'
import Product from '../components/Product'
import axios from 'axios';

interface Product{
    id : number,
    name : string,
    total_quantity : number,
}

const ProductPage = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try{
                const response = await axios.get('http://localhost:3000/products');
                console.log("Products: "+response.data);
                setProducts(response.data.data);
                setLoading(false);
            }
            catch(error){
                console.log(error);
            }
        }
        getProducts();
  },[]);

    return (
        <>
        <h2>Product List</h2>
        <div className="error">{loading ? "Loading..." : ""}</div>
        <div>
            {products.map((product) => (
                <Product key={product.id} 
                id={product.id}
                name={product.name}
                total_quantity={product.total_quantity}
                />
            ))}
        </div>
        </>
    )
}

export default ProductPage