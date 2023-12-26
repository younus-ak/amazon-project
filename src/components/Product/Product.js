import React from 'react';
import './Product.css';
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const Product = (props) => {
    console.log(props.product)
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>Product</h3>
                <h2 className='product-name'>{name}</h2>
                <br />
                <h4><small>by:{seller}</small></h4>
                <h3>${' ' + price}</h3>
                <br />
                <u> <p><small>Only <b>{stock}</b> left in stock</small></p></u>
                <button className='add-to-cart'>  <FontAwesomeIcon icon={faCartShopping}/>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;