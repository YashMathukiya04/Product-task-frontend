import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addBulk } from "../api/stock.api";

interface Product {
  id: number;
  name: string;
  total_quantity: number;
}

const AddCart = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const products = (location.state as Product[]) || undefined;
  const [quantity, setQuantity] = useState(1);

  const [cartItems, setCartItems] = useState(
    products.map((p) => ({
      product_id: p.id,
      product_name: p.name,
      quantity: 1,
      batch_number: "",
      expiry_date: "",
    })),
  );

  const value: number = 1;

  const increase = (index : number) => {
    setCartItems((prev) =>
      prev.map((p, i) =>
        i === index ? { ...p, quantity: p.quantity + 1 } : p,
      ),
    );
  };

  const decrease = (index : number) => {
    setCartItems((prev) =>
      prev.map((p, i) =>
        i === index ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p,
      ),
    );
  };

  const handleBulk = async() => {
    try {
      const payload = cartItems.map((item) => ({
        product_id: item.product_id,
        product_name: item.product_name,
        quantity: item.quantity,
        batch_number: item.batch_number || "DEFAULT_BATCH",
        expiry_date: item.expiry_date || "2026-12-31",
      }));
      const response = await addBulk(payload);
      console.log(response);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <center>
      <h2>Cart</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Final Quantity</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.product_id}>
              <td>{item.product_name}</td>
              <td>
                <button onClick={() => decrease(index)}>-</button>
                &nbsp; {value} &nbsp;
                <button onClick={() => increase(index)}>+</button>
              </td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button onClick={handleBulk}>Add</button>
    </center>
  );
};

export default AddCart;
