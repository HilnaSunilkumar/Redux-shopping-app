import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import RootStateOrAny from "react-redux";


export const ProductComponent = () => {
    const products = useSelector((state)  => state.allProducts.products);
    console.log(products);
    const list = products.map((product) => {
        const {id, title, image, price, category  } = product

        return (
            <div className='grid-container' key={id}>
                <Link to={`product/${id}`}>
                <div className='grid-item'>
                    <div className='card'> 
                        {/* <div className='img'>  */}
                            <img src={image} alt= {title} className='img'/>
                        {/* </div> */}
                        <div className='cont'>
                            <h4 >{title}</h4>
                            <p>${price}</p>
                            <p >{category}</p>

                        </div>
                    </div>
                </div>
                </Link>
           </div>
        );
    });
    
    return <> {list}</>;
};