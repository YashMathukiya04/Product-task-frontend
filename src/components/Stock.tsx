import React, { useEffect, useState } from "react";
import { getStocks } from "../api/stock.api";
import { useNavigate } from "react-router-dom";

interface Stock {
    id : number,
    batch_number : string,
    quantity : number,
    product : {
        name: string;
        total_quantity: number;
    },
}

const StockPage : React.FC<Stock> = () => {

    const [loading, setLoading] = useState(true);
    const [stock, setStock] = useState<Stock[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getStocks();
            setStock(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
        };
        fetchData();
    },[]);

    return(
        <>
        <center>
            <div className="navbar">
                <h2>Stock List</h2>
                <div className="menus">
                    <button onClick={() => navigate('/stock/add')}>Add Stock</button>

                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Stock ID</th>
                        <th>Batch No.</th>
                        <th>Quantity</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {stock.map((stock) => (
                        <tr key={stock.id}>
                            <td>{stock.id}</td>
                            <td>{stock.batch_number}</td>
                            <td>{stock.quantity}</td>
                            <td>
                                <button onClick={() => navigate('/stock/')}>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </center>
        </>
    );
};

export default StockPage;