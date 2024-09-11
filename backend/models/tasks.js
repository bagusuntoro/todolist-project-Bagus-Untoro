const { DataTypes } = require('sequelize');
const sequelize = require('../config/index');

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  tags: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
  },
  completed_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'tasks',
  timestamps: true,
});

module.exports = Task;
