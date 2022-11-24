require("dotenv").config({
    path: ".env",
});
// const connectDB = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const userRouter = require('./routes/userRoute');

//routes
app.use('/backend/user', userRouter);

//connect to Database
// connectDB();

//Redirect to routes

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Page Not Found",
    });
    next();
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});