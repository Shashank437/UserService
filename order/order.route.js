const express = require('express');
const orderController = require('./order.controller.js');
const authenticate = require('../user/authenticate.user.js');

const router = express.Router();

router
    .route('/')
    .post(authenticate, orderController.createOrder)
    .get(authenticate, orderController.getAllOrders);

router
    .route('/:id')
    .post(authenticate, orderController.cancelOrder);

module.exports = router;
