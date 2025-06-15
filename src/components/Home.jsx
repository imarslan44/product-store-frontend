import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import ProductCard from './ProductCard'
//import prodct.css
import './product.css'
import { ProductContext } from './Context'


const Home = () => {
//const [Products, setProducts] = useState(null);
const [updatedProduct, setUpdatedProduct] = useState({
  name: "",
  price: "",
  image: ""
});
const [ShowUpdateModal, setShowUpdateModal] = useState(false)

const [Products, setProducts, productId, setproductId ] = React.useContext(ProductContext);

useEffect(() => {
  if (productId) {
    const product = Products.find((p) => p._id === productId);  
    if (product) {
     setShowUpdateModal(true);
    }
   

  } else {
    setShowUpdateModal(false);
  }
  async function timeout(){
 await setTimeout(() => {
  setproductId("");
    }, 10000)
    console.log(productId);
  }
  timeout();
 




    
}, [productId]);

//fetch products from api



 useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/products');
        const data = await res.json();
        setProducts(data);
        console.log(data) ;
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);
//update product function
  const updateProduct = (product) => {

  setShowUpdateModal(!ShowUpdateModal);
  
//   if (updatedProduct.name && updatedProduct.price && updatedProduct.image) {
//     fetch(`http://localhost:4000/api/products/${product._id}`, {
//       method: "PUT",      
//       headers: {
//         "Content-Type": "application/json"
//       },      
//       body: JSON.stringify(updatedProduct)  
//     });
// };
//   setProducts(Products.map((p) =>
//     p._id === product._id ? { ...p, ...updatedProduct } : p
//   ));

}
//delete product function


const handleChangle = (input) => {
  const { name, value } = input;          
  setUpdatedProduct((prev) => {
    return { ...prev, [name]: value };
  });
}


const submitUpdate = async(e) => {
  e.preventDefault();   
  if (!updatedProduct.name || !updatedProduct.price || !updatedProduct.image) {
    return alert("Please fill all fields");
  }       
  const res = await fetch(`http://localhost:4000/api/products/${productId}`, {    
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedProduct)
  }); 
  if (!res.ok) {
    return alert("Something went wrong");
  }
  const data = await res.json();
  console.log(data);
  alert("Product updated successfully");
  setProducts(Products.map((p) =>
    p._id === productId ? { ...p, ...updatedProduct } : p
  ));
  setUpdatedProduct({
    name: "",
    price: "",
    image: ""
  });
  setShowUpdateModal(false);
}
  

  return (
    <>
      <Nav/>
    <main className="home-container">

   { 
   Products == null ? (
    <h1>Loading...</h1>
   ) : (
  <>
<form className={`updateModal ${ShowUpdateModal ? "show" : ""}`} onSubmit={submitUpdate} >
     <h1>Update Product</h1>
     <input type="text" value={updatedProduct.name} name="name" 
     onChange={(e)=>handleChangle(e.target)}/>
     <input type="number" value={updatedProduct.price} name="price" 
     onChange={(e)=>handleChangle(e.target)}/>
     <input type="text"   value={updatedProduct.image} name="image" 
     onChange={(e)=>handleChangle(e.target)}/>
     <button>Update</button>
</form>
  <ul className='products-list'>    <div className="updateProductModel">
    
    </div>
      {
        Products.length ?Products.map((product)=>(
          <ProductCard key={product._id}
          product={product}  />
        )
          ): (<h2>Something went wrong!.</h2>)
      }
   </ul>
  </> 
   )
  }
    </main>
    </>
  )
}

export default Home