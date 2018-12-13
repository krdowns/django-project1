const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/associations', { useNewUrlParser: true } );

module.exports = {
    User : require('./user'),
    Restaurant : require('./restaurant'),
}