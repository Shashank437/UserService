const express = require('express');
const userRoute = require('./user/user.route.js');
const productRoute = require('./product/product.route.js');

const router = express.Router();

const allRoutes = [
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/products',
    route: productRoute,
  }
];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;