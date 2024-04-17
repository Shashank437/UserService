const router = require('express').Router();
const productController = require('./product.controller.js');
const authenticate = require('../user/authenticate.user.js');

router
    .route('/')
    .post(authenticate, productController.createProduct)
    .get(authenticate, productController.getAllProducts);

router
    .route('/:id')
    .get(authenticate, productController.getOneProduct)
    .put(authenticate, productController.updateProduct)
    .delete(authenticate, productController.deleteProduct);

router
    .route('/rate/:id')
    .post(authenticate, productController.rateProduct);

module.exports = router;
