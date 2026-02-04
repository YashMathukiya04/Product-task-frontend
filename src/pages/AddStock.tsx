import { useState } from "react";
import { addStock } from "../api/stock.api";
import { useNavigate } from "react-router-dom";

const AddStock = () => {

    const navigate = useNavigate();
    const [stock, setStock] = useState({
        product_id: 0,
        batch_number: '',
        quantity: 0,
        expiry_date: '',
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setStock({
            ...stock,
            [name] : name === 'product_id' || name === 'quantity' ? Number(value) : value,
        });
    }

    const handleSubmit = async(event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       
        try{

              const payload = {
                product_id: Number(stock.product_id), 
                batch_number: stock.batch_number,
                quantity: Number(stock.quantity), 
                expiry_date: `${stock.expiry_date}T00:00:00Z`,
            };
            await addStock(payload);
            setStock({
                product_id: 0,
                batch_number: '',
                quantity: 0,
                expiry_date: '',
            });
            navigate(-1);
        }catch(error){
            console.error(error);
        }
    }

    return (
        <>
            <h1>Add Stock</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Product ID</td>
                            <td><input type="text" name="product_id" placeholder="Product ID" value={stock.product_id} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Batch Number</td>
                            <td><input type="text" name="batch_number" placeholder="Batch Number" value={stock.batch_number} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Quantity</td>
                            <td><input type="number" name="quantity" placeholder="Quantity" value={stock.quantity} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Expiry Date</td>
                            <td><input type="date" name="expiry_date" placeholder="Expiry Date" value={stock.expiry_date} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="center"><button type="submit">Add Stock</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default AddStock;