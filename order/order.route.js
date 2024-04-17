const router = require('express').Router();
const orderController = require('./order.controller.js');
const authenticate = require('../user/authenticate.user.js');

router
    .route('/')
    .post(authenticate, orderController.createOrder)
    .get(authenticate, orderController.getAllOrders);

router
    .route('/:id')
    .post(authenticate, orderController.cancelOrder)