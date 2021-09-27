import React from 'react';

const OrderList = (props) => {
    const { order } = props;

    // const countReducer = (previous, meal) => previous + meal.quantity;
    // const count = order.reduce(countReducer, 0);

    // const count = order.reduce((previous, meal) => previous + meal.quantity, 0);



    const count = (previous,current) =>previous + current.quantity;
    const totalCount = order.reduce(count,0)

    // let count = 0;
    // for (const meal of order) {
    //     count = count + meal.quantity;
    // }

    console.log(order);

    return (
        <div>
            <h2>Order List</h2>
            <h4>Items Ordered: {totalCount}</h4>
        </div>
    );
};

export default OrderList;