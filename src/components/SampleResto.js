import React, {useEffect, useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CartItem from "./CartItem";
import CartCategory from "./CartCategory";
import './Restaurant.css'
import Card from 'react-bootstrap/Card';
import ProductCard from "./ProductCard";
import axios from "axios";

const cardData = [
    { title: "Bottomless Tostada Chips", text: 395.00, imgSrc: "1.jpg" },
    { title: "Calamari", text: 420.00, imgSrc: "2.jpg" },
    { title: "Classic Nachos", text: 325.00, imgSrc: "3.jpg" },
    { title: "Skillet Queso", text: 440.00, imgSrc: "4.png" },
    { title: "Southwestern Eggrolls", text: 350.00, imgSrc: "5.png" },
    { title: "Spiced Onion Rings", text: 275.00, imgSrc: "6.jpg" },
];

function SampleResto(){
    const [cart, setCart] = useState([]);
    const fetchCart = async () => {
        try {
            const result = await axios.get('http://localhost:5000/api/cartitems/listcart');
            setCart(result.data);
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };
    useEffect(() => {
        fetchCart();
    }, []);
    return(
        <Container id="restoContainer" fluid>
            <Row id="restoRow">
                <Col xs={12} md={3} id="Menu">
                <h1>Menu</h1>
                <table>
                    <tr>
                        <th>
                            Starters
                        </th>
                    </tr>
                    <tr>
                        Wings
                    </tr>
                    <tr>
                        Chicken
                    </tr>
                    <tr>
                        Big Mouth Burgers
                    </tr>
                    <tr>
                        Fajitas
                    </tr>
                    <tr>
                        Tacos, Quesadillas, Burritos
                    </tr>
                </table>
                </Col>
                <Col xs={12} md={6} id="Products">
                    <h1>Products</h1>
                    <br />
                    <div id="productsContainer">
                        {cardData.map((card, idx) => (
                            <ProductCard imgSrc={`assets/img/products/${card.imgSrc}`} title={card.title} text={card.text} key={idx} className="ProductCard"/>
                        ))}
                    </div>
                </Col>
                <Col xs={12} md={3} id="cartContainer">
                    <h1>Cart</h1>
                    {cart.map((cartitem, idx) => (
                        <CartItem key={idx} name={cartitem.name} price={`P${cartitem.price}`} quantity={cartitem.quantity} fetchCart={fetchCart}/>
                    ))}
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