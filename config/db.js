const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load .env variables

// Create a Sequelize instance with environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,       // Database name
  process.env.DB_USER,       // Username
  process.env.DB_PASSWORD,   // Password
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',     // Use PostgreSQL
  }
);

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the PostgreSQL database successfully!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
