const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    name: {type: String, required: true},
    quantity: {type: String, required: true},
    price: {type: Number, required: true},
    totalPrice: {type: Number, required: false},
});

const CartItem = mongoose.model('CartItem', cartSchema);

module.exports = CartItem;