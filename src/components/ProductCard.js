import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import axios from "axios";


function ProductCard(props) {
    const navigate = useNavigate();
    const addProduct = async (e) => {
        const name = props.title;
        const price = props.text;
        const quantity = 1;
        try {
            const response = await axios.post("http://localhost:5000/api/cartitems/addtocart", {
                name,
                price,
                quantity
            });
            if (response.status === 200) {
                console.log("Added to cart.")
                props.fetchCart();
                navigate("/profile");
            }
        } catch (error) {
            console.error("Adding to cart failed:", error.response.data.message);
            alert("ERROR: Couldn't add to cart.");
        }
    };

    return(
        <Card className="ProductCard" border="warning">
            <Card.Header>
                <Card.Img variant="top" src={props.imgSrc} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            </Card.Header>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>P{props.text}.00</Card.Text>
                <Button className="addProductButton" onClick={addProduct}>ADD PRODUCT</Button>
                {/*{props.button && (
                    <Button className="addProductButton">ADD PRODUCT</Button>
                )}*/}
            </Card.Body>
        </Card>
    );
}

export default ProductCard;