const axios = require('axios');

const createItem = async (data) => {
    try {
        console.log('data', data);
        const response = await axios.post('http://localhost:3000/product', data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create item');
    }
};

const getAllProducts = async () => {
    try {
        const response = await axios.get('http://localhost:3000/product');
        return response.data;
    } catch (error) {
        throw new Error('Failed to get products');
    }
}

const getOneProduct = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/product/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to get product');
    }
}

const updateProduct = async (id, data) => {
    try {
        const response = await axios.put(`http://localhost:3000/product/${id}`, data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update product');
    }
}

const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/product/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to delete product');
    }
}

const rateProduct = async (id, data) => {
    try {
        const response = await axios.post(`http://localhost:3000/product/rate/${id}`, data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to rate product');
    }
}

module.exports = {
    createItem,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    rateProduct,
};
