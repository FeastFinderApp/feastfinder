import React from "react";

function CartCategory(props) {
    return(
        <div class="cartDescription">
            <div class="cartCategoryName">{props.name}</div>
            <div class="cartPrice">{props.price}</div>
        </div>
    );
}

export default CartCategory;