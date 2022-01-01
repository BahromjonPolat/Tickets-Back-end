const mongoose = require('mongoose');

const mongoConnect = () => {
    const mongoDB = 'mongodb://localhost/ticket';
    mongoose.connect(mongoDB);

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error'));
}

module.exports = mongoConnect;

