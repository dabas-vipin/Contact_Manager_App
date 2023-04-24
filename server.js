const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require("./middleware/errorHandler");
const app = express();

// connecting the database  
const connectDb = require("./config/dbConnection");
connectDb();

const port = process.env.PORT ||5000;
// using middleware - gives us acces to parser that parses data we recieve from client
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandler);
// Setting up the server ie telling it to repond to all querries on this port
app.listen(port,()=>{
     console.log(`Server is running on port ${port}`)
});