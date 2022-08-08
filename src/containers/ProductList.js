import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "redux/actions/productActions";
import { ProductComponent } from "./ProductComponent";

export const ProductList = () => {
    const dispatch = useDispatch();
    // console.log(products);

    const getAllProducts = async ()=>{
      const response = await  fetch('https://fakestoreapi.com/products')
        .then(res =>res.json());
        dispatch(setProducts(response));   
    };

    useEffect(()=>{
        getAllProducts();
    },[]);

    return (
        <div className='ui grid container'> 
        <ProductComponent/>
        </div>
    );
};