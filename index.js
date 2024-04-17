const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 4002;
const routes = require('./route.js');

app.use(express.json());

app.use('', routes);

mongoose.connect('mongodb://localhost:27017/user-service', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((error) => {
    console.log(error);
});


