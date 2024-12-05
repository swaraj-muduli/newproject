const express = require('express');
const app = express();
const userRouters = require('./routes/userRoutes')

//Middleware
app.use(express.json());//To parse json bodies

//Routes
app.use('/api/users',userRouters);

//set up server
const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
});