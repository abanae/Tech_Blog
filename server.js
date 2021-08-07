// Dependencies
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const session = require('express-session');

// Sequelize store to save the session so the user can remain logged in
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Starts the server to begin listening
const app = express();
const PORT = process.env.PORT || 3001;

// Initialize sessions
const sess = {
  secret: 'Super secret secret',
  cookie: {
    expires: 10 * 60 * 1000
  },
  resave: true,
  saveUninitialized: true,
  rolling: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Setting routes
app.use(routes);

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});