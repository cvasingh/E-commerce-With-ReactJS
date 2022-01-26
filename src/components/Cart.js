import React from 'react';
import { useCart } from "react-use-cart";

const Cart = (props) => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return (<div className='home_banner'><h1>Cart Is Empty</h1></div>)
    return (
        <div className='maincart'>
            <div className="cartdiv">
                <div className='home_banner'>
                    <div className="row justify-content-center">
                        <div className="col-md-12 ">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Item Number</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, index) => {
                                        return (
                                            <tr key={item}>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <button
                                                        className='btn btn-primary cartactionbutton'
                                                        onClick={() => { updateItemQuantity(item.id, item.quantity - 1) }}
                                                    ><i className='fas fa-minus'></i>
                                                    </button>
                                                    <b className='cartquantity'>{item.quantity}</b>
                                                    <button
                                                        className='btn btn-primary cartactionbutton'
                                                        onClick={() => { updateItemQuantity(item.id, item.quantity + 1) }}
                                                    ><i class="fas fa-plus"></i>
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        className='btn btn-danger cartactionbutton'
                                                        onClick={() => { removeItem(item.id) }}
                                                    ><i className='fas fa-times'></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>No. Item ({totalItems})</th>
                                        <th>Unique Item ({totalUniqueItems})</th>
                                        <th>Total ₹.({cartTotal})</th>
                                        <th><button className='btn btn-primary cartactionbutton'>Confirm Order</button></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;