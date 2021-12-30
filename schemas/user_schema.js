const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        // uid: {unique : true},
        name: { type: String, max: 30, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true, max: 30 },
        imageUrl: String,
        isOnline: Boolean

    }
);

module.exports = mongoose.model('User', userSchema);