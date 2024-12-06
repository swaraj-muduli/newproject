const express = require('express');
const sequelize = require('./config/db'); // Import Sequelize instance
require('dotenv').config();       // Load .env variables

const app = express();
const userRouters = require('./routes/userRoutes')

//Middleware
app.use(express.json());//To parse json bodies

//Routes
app.use('/api/users',userRouters);

//set up server
const PORT = process.env.PORT||4000;
app.listen(PORT,async()=>{
    console.log(`server is running on port ${PORT}`)
    try {
        // Sync database models
        await sequelize.sync();
        console.log('Database synchronized!');
      } catch (error) {
        console.error('Error synchronizing the database:', error);
      }
});