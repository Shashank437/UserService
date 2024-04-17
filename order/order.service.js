const axios = require('axios');

const createOrder = async (data) => {
    try {
        const response = await axios.post('https://localhost:4002/order', data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create order');
    }
}

const getAllOrders = async () => {
    try {
        const response = await axios.get('https://localhost:4002/order');
        return response.data;
    } catch (error) {
        throw new Error('Failed to get orders');
    }
}

const cancelOrder = async (id) => {
    try {
        const response = await axios.delete(`https://localhost:4002/order/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to cancel order');
    }
}

module.exports = {
    createOrder,
    getAllOrders,
    cancelOrder
};