import React, { useState } from "react";

function CartItem(props) {
    const [count, setCount] = useState(0);
    return(
        <div class="cartItem">
            <div class="cartDescription">
                <div class="cartItemName">{props.name}</div>
                <div class="cartPrice">{props.price}</div>
            </div>
            <div class="qty">
                <button onClick={() => setCount(prev => prev - 1)}>-</button>
                <div class="qtyCount">{count}</div>
                <button onClick={() => setCount(prev => prev + 1)}>+</button>
            </div>
        </div>
    );
}

export default CartItem;