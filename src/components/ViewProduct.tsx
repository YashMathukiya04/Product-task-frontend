import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../api/product.api";

const ViewProduct = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    console.log(id);

    const [product, setProduct] = useState({
        name: '',
        total_quantity: 0,
    });
    const [stock, setStock] = useState([]);

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
                <table className="table" border={1}>
                    <tbody>
                        <tr>
                            <td>Product Name</td>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <td>Total Quantity</td>
                            <td>{product.total_quantity}</td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="center">
                                <button onClick={() => navigate('/stock')}>View Stock</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
        </>
    )
}

export default ViewProduct;