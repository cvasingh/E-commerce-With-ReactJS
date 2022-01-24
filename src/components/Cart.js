import React from 'react';

export default function Cart() {
    return (
        <div className='home_banner'>
            <div className="row justify-content-center">
                <div className="col-md-10 col-sm-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Item Number</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th>Cannon EOS</th>
                                <th>Rs. 36000.00</th>
                                <th>(X)</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th>Cannon EOS</th>
                                <th>Rs. 36000.00</th>
                                <th>(X)</th>
                            </tr>
                            <tr>
                                <td></td><td>Total</td><td>Rs </td><td><a href='success.html' className='btn btn-primary'>Confirm Order</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
