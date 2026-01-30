import React from 'react'

interface ProductProps{
    id: number;
    name: string;
    total_quantity: number;
    // created_at: string | Date;
    // updated_at: string | Date;
    // stocks?: any[];
}

const Product :React.FC<ProductProps> = ({name,total_quantity}) => {
  return (
    <>
        <h4>{name}</h4>
        {total_quantity && <p>Quantity: ₹{total_quantity}</p>}
    </>
  )
}

export default Product