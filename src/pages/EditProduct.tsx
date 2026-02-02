import type React from "react"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateProductById } from "../api/product.api";

const EditProduct = () => {

    const [product, setProduct] = useState({
        name : "",
        total_quantity : "",
    });
    const navigate = useNavigate();
    const {id} = useParams();

    const handleUpdate = async(event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try{
            await updateProductById(Number(id), {
                name : product.name,
                total_quantity : Number(product.total_quantity)
            });
            console.log("Product updated successfully");
        }catch(error){
            console.error(error , "Error updating product");
        }
        navigate("/");
    }
  return (
    <>
        <h2>Edit Product</h2>
        <form onSubmit={handleUpdate}>
            <table>
                <tbody>
                <tr>
                    <td>Product Name</td>
                    <td><input type="text" placeholder='Product Name' value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} /></td>
                </tr>
                <tr>
                    <td>Quantity</td>
                    <td><input type="number" placeholder='Quantity' value={product.total_quantity} onChange={(e) => setProduct({...product, total_quantity: e.target.value})} /></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <button type='submit'>Update</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    </>
  )
}

export default EditProduct