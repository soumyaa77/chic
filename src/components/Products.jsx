import styled from "styled-components";
//import { popularProducts } from "../data";
import Product from "./Product";
import { useState, useEffect} from "react";
import axios from "axios";

const Container=styled.div`
padding: 20px;
display: flex;
flex-wrap:wrap;
justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {


const [products, setProducts] =useState([]);
const [filteredProducts, setfilteredProducts] =useState([]);
 
useEffect(()=>{
const getProducts= async()=>{
  try{
     const res=await axios.get(cat ? `https://chic-api.onrender.com/api/products?category=${cat}` : "https://chic-api.onrender.com/api/products" );
     setProducts(res.data);
  }catch(err){

  }
};
getProducts()
},[cat]);
 
useEffect(()=>{
cat && setfilteredProducts(
  products.filter(item => Object.entries(filters).every(([key, value])=>
  item[key].include(value)
  ))
);
}, [products, cat, filters] );


useEffect(()=>{
if(sort==="newest"){
  setfilteredProducts(prev =>
    [...prev].sort((a,b)=>a.createdAt-b.createdAt));
} else if((sort==="asc")){
  setfilteredProducts((prev)=>
  [...prev].sort((a,b)=>a.price-b.price));
} else{
  setfilteredProducts((prev)=>
  [...prev].sort((a,b)=>b.price-a.price));
}
}, [sort]);
  return (
    <Container>
      {cat ? filteredProducts.map((item) =>(
        <Product item={item} key={item.id}/>
      )) : products.slice(0,8)
      .map((item)=><Product item={item} key={item.id} />)}
    </Container>
  );
}

export default Products;
