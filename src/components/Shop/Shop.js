import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const first20 = fakeData.slice(0, 20);
    const [products, setProducts] = useState(first20);
    console.log(fakeData);
    return (
        <div className='shop-container'>
            <div className="product-container">

                <h1>Shop </h1>
                <h3>{products.length}</h3>

                {
                    products.map(pd => <Product product={pd}> </Product>)
                }


            </div>

            <div className="cart-container">

                <h3>This is cart</h3>

            </div>

        </div>
    );
};

export default Shop;