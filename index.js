const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config');
const employees = require('./routes/employees');
const departments = require('./routes/departments');
const app = express();
app.use(express.json());

//connect to the database
connectDB();

app.use('/employees', employees);
app.use('/departments', departments);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});


//Deploy this assignment on vercel cloud plateform.