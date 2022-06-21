const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// console.log(sequelize)

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        
          author: {
              type: DataTypes.STRING,
              allowNull: false,
          },

          content: {
              type: DataTypes.TEXT,
              allowNull: false
          }
    }, 
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
        
    }
)

module.exports = Blog;