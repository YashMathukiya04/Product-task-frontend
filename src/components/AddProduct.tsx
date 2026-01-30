import React, { useState } from 'react'
import { addProduct } from '../api/product.api';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
  });

  const handleSubmit = async(event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try{
      await addProduct({
        name: product.name
      });

      setProduct({
        name: '',
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
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Product Name' value={product.name} name='name' onChange={handleChange} />
            {/* <input type="number" placeholder='Quantity' value={product.total_quantity} name='total_quantity' onChange={handleChange} /> */}
            <button type='submit'>Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct;