import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { removeSelectedProduct, selectedProduct } from "redux/actions/productActions";

export const ProductDetail = () => {
    const product = useSelector(state  => state.product);
    const {title, price, category, image, description} = product;
    // console.log(product, 'product detail')
    const {id} = useParams();
    console.log(id);
    const dispatch = useDispatch();

    const getProductDetail =  async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        // .then(json => console.log(json,'json'))
        .catch((error)=>{
            console.log(error)
        });
        // .then(json => console.log(json,'jsonDEtail'));
        console.log(response,'respnsseee')

        dispatch(selectedProduct(response));
    };

    useEffect(()=>{
        if(id && id!== '') getProductDetail();
        return ()=> {
            dispatch(removeSelectedProduct());
        };
    },[id])

    return (
        <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" >
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )};
    </div>
    );
};