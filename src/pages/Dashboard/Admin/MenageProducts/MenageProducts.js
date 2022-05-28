import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow';



const MenageProducts = () => {

    const [products, setProducts] = useState([]);
    const [reload, setIsReload] = useState(true)
    console.log(reload);
    useEffect(() => {
        const url = 'https://quiet-fjord-62553.herokuapp.com/product';
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })

    }, [reload])

    return (
        <div className="overflow-x-auto mx-5 mt-5">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map((product, index) => <ProductRow product={product} setIsReload={setIsReload} reload={reload} index={index} key={product._id} ></ProductRow>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MenageProducts;