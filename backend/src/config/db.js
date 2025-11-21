const mongoose = require('mongoose');


async function connectDB(uri) {
if (!uri) throw new Error('MONGODB_URI is required');
return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}


module.exports = connectDB;