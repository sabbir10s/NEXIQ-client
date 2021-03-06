import React, { useEffect, useState } from 'react';
import MenageOrderRow from './MenageOrderRow';



const MenageOrders = () => {

    const [orders, setOrders] = useState([]);
    const [reload, setIsReload] = useState(true)


    console.log(reload);
    useEffect(() => {
        const url = 'https://quiet-fjord-62553.herokuapp.com/order';
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })

    }, [reload])

    return (
        <div className="overflow-x-auto mx-5 mt-5">
            <p className='text-2xl font-bold text-primary'>Menage All Orders</p>
            <div className="divider mt-3"></div>

            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>User Name</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Payment</th>
                        <th>Shipment Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map((order, index) => <MenageOrderRow order={order} setIsReload={setIsReload} reload={reload} index={index} key={order._id} ></MenageOrderRow>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MenageOrders;