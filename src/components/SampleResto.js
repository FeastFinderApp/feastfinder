import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CartItem from "./CartItem";
import CartCategory from "./CartCategory";
import './Restaurant.css'
import Card from 'react-bootstrap/Card';
import img1 from '../images/Products/1.jpg';
import img2 from '../images/Products/2.jpg';
import img3 from '../images/Products/3.jpg';
import img4 from '../images/Products/4.png';
import img5 from '../images/Products/5.png';
import img6 from '../images/Products/6.jpg';

const cardData = [
    { title: "Bottomless Tostada Chips", text: "P395.00", imgSrc: img1 },
    { title: "Calamari", text: "P420.00", imgSrc: img2 },
    { title: "Classic Nachos", text: "P325.00", imgSrc: img3 },
    { title: "Skillet Queso", text: "P440.00", imgSrc: img4 },
    { title: "Southwestern Eggrolls", text: "P350.00", imgSrc: img5 },
    { title: "Spiced Onion Rings", text: "P275.00", imgSrc: img6 },
    { title: "Product A", text: "Product Price", imgSrc: "" },
    { title: false, text: false, imgSrc: false, button: true},
];

function SampleResto(){
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
                    <Row xs={2} md={3} className="Products">
                        {cardData.map((card, idx) => (
                            <Col key={idx} className="mb-3">  
                                <Card className="ProductCard" border="warning">
                                    <Card.Header>
                                        <Card.Img variant="top" src={card.imgSrc} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>{card.text}</Card.Text>
                                        {card.button && (
                                            <Button className="addProductButton">ADD PRODUCT</Button>
                                        )}
                                    </Card.Body>
                                </Card>
                            </Col> 
                        ))}
                    </Row>
                </Col>
                <Col xs={12} md={3} id="cartContainer">
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