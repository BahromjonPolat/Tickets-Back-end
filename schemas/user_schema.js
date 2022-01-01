const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        firstTime: Date,
        lastAction: Date,
        imageUrl: String,
        isOnline: Boolean,
        
    }

);

module.exports = mongoose.model('User', userSchema);