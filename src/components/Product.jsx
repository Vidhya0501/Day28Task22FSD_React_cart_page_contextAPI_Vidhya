import React,{useContext} from 'react'
import Quantity from './Quantity'
import { CartContext } from '../CartContext'

const Product = ({product}) => {

  

  const {removeProduct}=useContext(CartContext);
    
  const handleRemove=()=>{
    removeProduct(product.id);
  }

 
  return (
    <>
    <div className="product d-flex justify-content-between me-5">
        <div className="product-left">
        <div className="container">
            <div className="card mb-3" style={{width: "540px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.thumbnail} className="img-fluid rounded-start" alt="product-image"  style={{width: "350px",height:"250px"}}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-start fs-5">{product.title}</h5>
            <p className="card-text text-start fs-5"><small className="text-muted">{product.brand}</small></p>
            <p className="card-text text-start fs-5">{product.description}</p>
            <p className="card-text text-start fs-5"><small className="text-muted">{product.category}</small></p>
          </div>
        </div>
      </div>
    </div>
            </div>
        </div>

      <div className="product-right d-flex flex-column justify-content-between">
        <Quantity product={product} productId={product.id} quantity={product.quantity}/>
    
        <a href="#" className="btn delete mb-5 fw-bold text-danger " onClick={handleRemove}>REMOVE</a>
      </div>
    </div>
   
       
       
        
    </>
  )
}

export default Product