import React from 'react';
import Itemcard from './Itemcard';
import data from './data';

export default function Product() {
    return (
        <div>
            <div className="home_banner">
                <h1>Welcome to our Ecommerce Store!</h1>
                <p>We have the best cameras, watches and
                    shirts for you. No need to hunt around, we have all in one place.
                </p>
            </div>
            <div className="container" id="content">
                <div className="row text-center" id="cameras">
                    <h2 className='title'>Cameras</h2>
                    {data.camerasData.map((item, index) => {
                        return (
                            <Itemcard 
                            img={item.img} 
                            title={item.title} 
                            price={item.price} 
                            item={item} 
                            key={index} />
                        )
                    }
                    )}
                </div>
                <div className="row text-center" id="watches">
                    <h2 className='title'>Watches</h2>
                    {data.watchesData.map((item, index) => {
                        return (
                            <Itemcard 
                            img={item.img} 
                            title={item.title} 
                            price={item.price} 
                            item={item} 
                            key={index} />
                        )
                    }
                    )}
                </div>
                <div className="row text-center" id="shirts">
                    <h2 className='title'>Shirts</h2>
                    {data.shirtsData.map((item, index) => {
                        return (
                            <Itemcard 
                            img={item.img} 
                            title={item.title} 
                            price={item.price} 
                            item={item} 
                            key={index} />
                        )
                    }
                    )}
                </div>
            </div>

        </div>
    );
}
