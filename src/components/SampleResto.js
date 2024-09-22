import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartItem from "./CartItem";
import CartCategory from "./CartCategory";
import './Restaurant.css'

function SampleResto(){
    return(
        <Container id="restoContainer" fluid>
            <Row id="restoRow">
                <Col>
                    
                </Col>
                <Col xs={6}>
                    
                </Col>
                <Col id="cartContainer">
                    <h1>Cart</h1>
                    <CartItem name="Bottomless Tostada Chips and Salsa" price="P790.00" />
                    <CartItem name="Spiced Onion Rings" price="P825.00" />
                    <br />
                    <CartCategory name="Subtotal" price="P1615.00" />
                    <CartCategory name="Delivery Fee" price="P40.00" />
                    <br />
                    <CartCategory name="Total" price="P1655.00" />
                    <br />
                    <button>Checkout</button>
                </Col>
            </Row>
        </Container>
    );
}

export default SampleResto;