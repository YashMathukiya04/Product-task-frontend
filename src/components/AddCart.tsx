import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const AddCart = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { product_id, product_name } = location.state || {};
  const [quantity, setQuantity] = useState(1);

  
  const increase = () => {
    setQuantity(q => q + 1);
  };

  const decrease = () => {
    setQuantity(q => (q > 1 ? q - 1 : q));
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
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{product_name}</td>

            <td>
              <button onClick={decrease}>-</button>
              &nbsp; {quantity} &nbsp;
              <button onClick={increase}>+</button>
            </td>

            <td>{quantity}</td>
          </tr>
        </tbody>
      </table>

      <br />

      <button onClick={() => navigate(-1)}>
        Add Another Product
      </button>
    </center>
  );
};

export default AddCart;
