const mongoose = require('mongoose');


const connectDB = async () => {
    const connection = await mongoose.connect(
        process.env.MONGOURI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );
    console.log(`Mongodb connected, ${connection.connection.host}`)
};

module.exports = connectDB;