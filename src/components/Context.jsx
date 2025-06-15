import React from 'react'
import {useState, createContext } from 'react'

export const ProductContext = createContext();

const Context = ({children}) => {
const [Products, setProducts] = useState([]);
const [productId, setproductId] = useState("");
  return (
   <ProductContext.Provider value={[Products, setProducts, productId, setproductId]}>
    {children}
   </ProductContext.Provider>
  )

  
}

export default Context