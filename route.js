const express = require('express');
const userRoute = require('./user/user.route.js');

const router = express.Router();

const allRoutes = [
  {
    path: '/users',
    route: userRoute,
  }
];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;