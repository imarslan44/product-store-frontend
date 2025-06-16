import React, { useState } from 'react'
import Nav from './Nav'

const CreatePage = () => {
const [NewProduct, setNewProduct] = useState({
  name:  "",
  price:  "",
  image: "",
})

const handleChange = (input) =>{
  const props = Object.keys(NewProduct)
 
  const {name, value} = input;

     setNewProduct((prev)=> {
      return {...prev, [name]: value} ;
    });
}

const creatProduct = async(e)=>{
e.preventDefault();
if(!NewProduct.name || !NewProduct.price || !NewProduct.image) {
  return alert("Please fill all fields");
}
const res = await fetch('https://product-store-backend-fjey.onrender.com/api/products', { 
  method: "POST",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(NewProduct)
});

if(!res.ok) {
  return alert("Something went wrong");
}

const data = await res.json();
console.log(data);
alert("Product created successfully");
  
setNewProduct({
  name: "",
  price: "",
  image: "",
})
}

  return (
 <>
 <Nav></Nav>
 <div className="product-form">
    <form onSubmit={creatProduct}>
        <h1>Create Product</h1>
        <input type="text" name='name' placeholder='name' value={NewProduct.name}  onChange={(e)=>handleChange(e.target)}/>
        <input type="number" name="price" placeholder='price' value={NewProduct.price}  onChange={(e)=>handleChange(e.target)}/>
        <input type="text" name="image" placeholder='image url' value={NewProduct.image}  onChange={(e)=>handleChange(e.target)}/>
        <button >Submit</button>
    </form>
 </div>
 </>
  )
}

export default CreatePage