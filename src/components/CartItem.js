import React, {useEffect, useState} from "react";

function CartItem(props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(props.quantity);
    }, []);

    return(
        <div className="cartItem">
            <div className="cartDescription">
                <div className="cartItemName">{props.name}</div>
                <div className="cartPrice">{props.price}</div>
            </div>
            <div className="qty">
                <button onClick={() => setCount(prev => prev - 1)}>-</button>
                <div className="qtyCount">{count}</div>
                <button onClick={() => setCount(prev => prev + 1)}>+</button>
            </div>
        </div>
    );
}

export default CartItem;