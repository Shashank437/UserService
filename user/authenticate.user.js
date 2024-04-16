const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    try {
        console.log(req.headers);
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, 'secret');
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Not authorized' });
    }
};

module.exports = authenticate;