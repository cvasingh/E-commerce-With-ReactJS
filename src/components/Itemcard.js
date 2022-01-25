import React from 'react';
import { useCart } from "react-use-cart";

const Itemcard = (props) => {
    const { addItem } = useCart();
    return (
        <>
            <div className="col-md-3 col-sm-6 home-feature">
                <div className="card thumbnail_bax">
                    <img className='card-img-top' src={props.img}></img>
                    <div className="card-body">
                        <h4 className='card-title'>{props.title}</h4>
                        <p className='card-text'>{props.price}</p>
                        <b>Price: ₹.{props.price}</b><br></br>
                        <button onClick={() => addItem(props.item)}
                            className="btn btn-primary btnaddtocart">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Itemcard;