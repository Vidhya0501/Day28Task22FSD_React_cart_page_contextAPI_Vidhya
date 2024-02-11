import React, { useContext } from 'react'
import { CartContext } from '../CartContext';

const Quantity = ({product,productId,quantity}) => {

  const {updateQuantity}=useContext(CartContext);

  const handleQuantityChange=(e)=>{
    const newQuantity=parseInt(e.target.value);
    updateQuantity(productId,newQuantity);
    
  }
  
  
  const product_price=product.price*product.quantity;

  const quantityOptions=[];
  for(let i=1;i<=product.stock;i++){
    quantityOptions.push(<option key={i} value={i}>
      {i}
    </option>)
  }
  return (
   <>
   <div className="qty-price d-flex mt-5 justify-content-between ">
   <select value={quantity} onChange={handleQuantityChange}>
        {quantityOptions}
    </select>

    <p className='mt-1 fw-bold'> ${product_price}</p>
   </div>
  
   </>
  )
}

export default Quantity