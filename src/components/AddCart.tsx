import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addBulk } from "../api/stock.api";

interface Product {
  id: number;
  name: string;
  total_quantity: number;
}

const AddCart = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const selectedproduct = localStorage.getItem('selectedproduct');

  const products: Product[] = selectedproduct
  ? JSON.parse(selectedproduct)
  : [];

  // const products = (location.state as Product[]) || undefined;
  // const [quantity, setQuantity] = useState(1);

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

  const increase = (index: number) => {
    setCartItems((prev) =>
      prev.map((p, i) =>
        i === index ? { ...p, quantity: p.quantity + 1 } : p,
      ),
    );
  };

  const decrease = (index: number) => {
    setCartItems((prev) =>
      prev.map((p, i) =>
        i === index ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p,
      ),
    );
  };

  const isFutureDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    return date > today;
  }

  const handleBulk = async () => {

      if (!isFutureDate(cartItems[cartItems.length - 1].expiry_date)) {
              window.alert("Expiry date must be a future date");
            return;
        }

    try {
      const payload = cartItems.map((item) => ({
        product_id: item.product_id,
        product_name: item.product_name,
        quantity: item.quantity,
        batch_number: item.batch_number,
        expiry_date: item.expiry_date,
      }));
      const response = await addBulk(payload);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <center>
      <h2>Cart</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Final Quantity</th>
            <th>Batch Number</th>
            <th>Expiry Date</th>
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
              <td>
                <input type="text" required value={item.batch_number} onChange={(e) => setCartItems((prev) => prev.map((p, i) => i === index ? { ...p, batch_number: e.target.value } : p))}
                />
              </td>
              <td>
                <input type="date" required value={item.expiry_date} onChange={(e) => setCartItems((prev) => prev.map((p, i) => i === index ? { ...p, expiry_date: e.target.value } : p))}
                />
              </td>
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
