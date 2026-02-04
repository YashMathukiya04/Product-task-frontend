import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../api/product.api";

interface Stock {
    id: number;
    product_id: number;
    batch_number: string;
    quantity: number;
    expiry_date: string;
}

interface Product {
    id: string;
    name: string;
    total_quantity: number;
    stocks: Stock[];
}

const ViewProduct = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState<Product>({
        id : '',
        name: '',
        total_quantity: 0,
        stocks: [],
    });

   useEffect(() => {
        const fetchProduct = async() => {
            try{
                const product = await getProductById(Number(id));
                setProduct(product);
            }catch(error){
                console.log(error);
            }
        }
        fetchProduct();
   },[id]);


    return (
        <>
            <center>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Product Name</td>
                            <td>Total Quantity</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.total_quantity}</td>
                        </tr>
                    </tbody>
                </table>
                <br /><br /><br />
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Stock ID</td>
                            <td>Batch No.</td>
                            <td>Quantity</td>
                            <td>Expiry Date</td>
                        </tr>
                    </thead>
                    <tbody> 
                        {product.stocks.map((stock) => (
                            <tr key={stock.id}>
                                <td>{stock.id}</td>
                                <td>{stock.batch_number}</td>
                                <td>{stock.quantity}</td>
                                <td>{stock.expiry_date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </>
    )
}

export default ViewProduct;