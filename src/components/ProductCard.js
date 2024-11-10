import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";

function ProductCard(props) {
    return(
        <Card className="ProductCard" border="warning">
            <Card.Header>
                <Card.Img variant="top" src={props.imgSrc} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            </Card.Header>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                {props.button && (
                    <Button className="addProductButton">ADD PRODUCT</Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default ProductCard;