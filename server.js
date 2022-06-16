const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers/index');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// const userSession = {
//   secret: 'secret key',
//   cookie: { },
//   saveUninitialized: true,
//   store: new sequelizeStore({
//     db: sequelize
//   })
// }

// app.use(sessions(userSession));

const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});