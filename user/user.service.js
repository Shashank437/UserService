const User = require('./user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');

const createUser = async (data) => {
    const user = new User(data);
    return user.save();
};

const getAllUsers = async () => {
    return User.find();
};

const getOneUser = async (id) => {
    return User.findById(id);
};

const updateUser = async (id, data) =>{
    return User.findByIdAndUpdate(id, data)
};

const deleteUser = async (id) => {
    return User.findByIdAndDelete(id);
};

const login = async (data) => {
    const user = (await User.findOne({ email: data.email })).toObject();
    if (!user) {
        throw new Error('User not found');
    }
    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
        throw new Error('Invalid password');
    }
    const token = jwt.sign({ id: user._id }, 'secret')
    await User.findByIdAndUpdate(user._id, { token });
    return {user, token};
};

const logout = async (id) => {
    return User.findByIdAndUpdate(id, { token: null });
}

const createItem = async (data) => {
    try {
        const response = await axios.post('https://localhost:3000/create', data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create item');
    }
};

const buyItem = async (data) => {
    try {
        const response = await axios.post('https://localhost:3000/buy', data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to buy item');
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    login,
    logout,
    createItem,
    buyItem,
};
