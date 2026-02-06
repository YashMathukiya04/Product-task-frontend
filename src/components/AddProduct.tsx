import React, { useState } from 'react'
import { addProduct } from '../api/product.api';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    total_quantity: 0,
  });

  const handleSubmit = async(event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try{
      await addProduct({
        name: product.name,
        total_quantity: product.total_quantity,
      });

      setProduct({
        name: '',
        total_quantity: 0,
      });
      navigate('/');
    }catch(error){
      console.error(error);
    }
  }

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setProduct({
      ...product,
      [name]: name === 'total_quantity' ? Number(value) : value,
    });
  }
 
  return (
    <div>
      <center>
        <div className="navbar">
          <h2>Add Product</h2>
          <div className="menus">
            <button onClick={() => navigate("/")}>Back</button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='table-container'>
          <table className='product-table'>
            <tbody>
              <tr>
                <td>Product Name</td>
                <td><input type="text" placeholder='Product Name' value={product.name} name='name' onChange={handleChange} required/></td>
              </tr>
              <tr>
                <td>Quantity</td>
                <td><input type="number" placeholder='Quantity' value={product.total_quantity} name='total_quantity' onChange={handleChange} required/></td>
              </tr>
              <tr>
                <td colSpan={2} align='center'><button type='submit'>Add Product</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </center>
    </div>
  )
}

export default AddProduct;