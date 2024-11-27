const express = require('express');
const CartItem = require('../models/CartItem');

const router = express.Router();

//add to cart
router.post('/addtocart', async (req, res) => {
    const { name, price, quantity } = req.body;
    console.log("Adding to cart.")
    try {
        const newCartItem = new CartItem({
            name,
            price,
            quantity,
            //totalPrice: price * quantity,
        })

        await newCartItem.save();
        res.status(201).json({ message: 'Added to cart successfully' });
    }
    catch (error){
        console.error('Error during cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
})

//list cart
router.get('/listcart', async (req, res) => {
    try {
        CartItem.find({}).then(function (cart) {
            res.send(cart);
        });
    }
    catch (error) {
        console.error('Error getting cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
})

module.exports = router;