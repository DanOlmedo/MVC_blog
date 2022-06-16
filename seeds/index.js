const sequelize = require('../config/connection');
const Blog = require('../models/Blog');
const blogData = require('./blog-seeds.json');
const User = require('../models/User');
const userData = require('./user-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Blog.bulkCreate(blogData);

  await User.bulkCreate(userData,
    {
      individualHooks: true,
      returning: true
    })

  process.exit(0);
};

seedDatabase();