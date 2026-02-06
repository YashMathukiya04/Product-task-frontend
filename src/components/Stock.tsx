import { useEffect, useState } from "react";
import { getStocks } from "../api/stock.api";
import { useNavigate } from "react-router-dom";
import '../assets/css/stock.css';

interface Stock {
  id: number;
  product_id: number;
  batch_number: string;
  quantity: number;
  expiry_date: string;
  product: {
    name: string;
    total_quantity: number;
  };
}

const StockPage = () => {
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
  }, []);

  return (
    <>
      <center>
        <div className="navbar">
          <h2>Stock List</h2>
          <div className="menus">
            {/* <button onClick={() => navigate("/stock/add")}>Add Stock</button> */}
            <button onClick={() => navigate("/")}>Back</button>
          </div>
        </div>
        <table className="stock-table">
          <thead>
            <tr>
              <th>Stock ID</th>
              <th>Product ID</th>
              <th>Batch No.</th>
              <th>Quantity</th>
              <th>Expiry Date</th>
            </tr>
          </thead>
          <tbody>
            {stock.map((stock) => (
              <tr key={stock.id}>
                <td>{stock.id}</td>
                <td>{stock.product_id}</td>
                <td>{stock.batch_number}</td>
                <td>{stock.quantity}</td>
                <td>{stock.expiry_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </>
  );
};

export default StockPage;
