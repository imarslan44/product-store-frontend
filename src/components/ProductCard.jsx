import React, { useState } from 'react'
// import navigate from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from './Context'
const ProductCard = ({product}) => {

  const [Products, setProducts, , setproductId] = React.useContext(ProductContext);

// Function to delete a product

  const deleteProduct = (pId)=>{
  const confirmDelete = window.confirm("Are you sure you want to delete this product?");
console.log(pId);

  if(confirmDelete){
  fetch(`http://localhost:4000/api/products/${pId}`,{
    method: "DELETE",
  });

  //remove product from state
  setProducts(Products.filter((products)=> products._id !== pId))
  
  }

  }
  

  return (
    <li className='product-card'>
        <img src={product.image} alt="" />
        <h3>{product.name}</h3>
        <span>{product.price}</span>
        <p></p>
        <button onClick={()=>deleteProduct(product._id)}>Delete</button>
        <button onClick={()=>setproductId(product._id)}>Update</button>
    </li>
  )

}

export default ProductCard