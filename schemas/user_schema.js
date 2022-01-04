const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true , dropDups: true },
        password: { type: String, required: true },
        firstTime: Date,
        lastAction: Date,
        imageUrl: String,
        isOnline: Boolean,
        
    }

);

userSchema.plugin(validator);

module.exports = mongoose.model('User', userSchema);