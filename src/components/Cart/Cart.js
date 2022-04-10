import React from 'react';
import './Cart.css'

const Cart = ({cart,children}) => {
    let total = 0
    let shipping = 0
    let quantity = 0

    for(const product of cart){
        quantity = quantity + product.quantity
        // console.log(quantity,product.quantity,product);
        total = total+ product.price * product.quantity
        shipping = shipping+ product.shipping
    }

    const tax = (total * 0.1).toFixed(2)

    const grandTotal = total + shipping + Number(tax)

    return (
        <div className='cart'>
            <h4>Order summery</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping} </p>
            <p>Tax: ${tax} </p>
            <h5>Grand Total: ${grandTotal} </h5>
            {children}
        </div>
    );
};

export default Cart;