import React from 'react'

interface ProductProps{
    id: number;
    name: string;
    total_quantity: number;
    // created_at: string | Date;
    // updated_at: string | Date;
    // stocks?: any[];
}

const Product = (props:ProductProps) => {
  return (
    <>
        <h4>{props.name}</h4>
        {props.total_quantity && <p>Quantity: ₹{props.total_quantity}</p>}
    </>
  )
}

export default Product;