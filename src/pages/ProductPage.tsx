
import { useEffect, useState } from 'react'
import Product from '../components/Product'
import '../assets/css/productpage.css';
import { getProducts, deleteProductbyId } from '../api/product.api';
import { useNavigate } from 'react-router-dom';

interface Product{
    id : number,
    name : string,
    total_quantity : number,
}

const ProductPage = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedproduct, setSelectedproduct] = useState<Product[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
        };
        fetchData();
    },[]);

    const handleAddToCart = (product : Product, checked : boolean) => {
        if(checked){
            setSelectedproduct(prev => [...prev, product]);
        }else{
            setSelectedproduct(prev => prev.filter(p => p.id !== product.id));
        }
    }

    const deleteProduct = async (id : number) => {
        try{
            await deleteProductbyId(id);
            setProducts(products.filter((product) => product.id !== id));
        }catch(error){
            console.error(error);
        }
    };

    return(
        <>
        <div className="table-container">
           <div className="navbar">
             <h2>Product List</h2>
             <div className="menus">
                <button onClick={() => navigate('/add')}>Add Product</button>
                <button onClick={() => navigate('/stock')}>View Stock</button>
                <button onClick={() => navigate('/cart/add',{state : selectedproduct})}>Add to Cart</button>
             </div>
           </div>
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.total_quantity}</td>
                        <td className='action-buttons'>
                            <button onClick={() => navigate('/edit/' + product.id)}>Edit</button>
                            <button onClick={() => deleteProduct(product.id)}>Delete</button>
                            <button onClick={() => navigate('/product/' + product.id)}>View</button>
                            {/* <button onClick={() => navigate('/cart/add', { state: {
                                 product_id: product.id, 
                                 product_name: product.name 
                                 } 
                            })}>Add to Cart</button> */}
                            <input type="checkbox" name="addtocart" id="addtocart" onChange={(e) => handleAddToCart(product, e.target.checked)} />
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
        </div>
        </>
    );
}

export default ProductPage;