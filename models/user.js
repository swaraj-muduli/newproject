const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Import Sequelize instance

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Validate email format
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profile_picture: {
    type: DataTypes.STRING,
    allowNull: true, // Optional
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true, // Optional
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW, // Default to current date
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW, // Default to current date
  },
}, {
  tableName: 'users', // Table name in the database
  timestamps: false, // Disable Sequelize's automatic `createdAt` and `updatedAt` columns
  hooks: {
    beforeUpdate: (user) => {
      user.updated_at = new Date(); // Automatically update the `updated_at` field
    },
  },
});

module.exports = User;
