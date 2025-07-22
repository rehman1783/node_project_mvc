const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const PORT = 3045;

// Middleware
 app.use(express.urlencoded({ extended: true }));

// // Set view engine
// app.set('view engine', 'ejs');

// Routes

app.use(session({
  secret: 'someSecretKey',
  resave: false,
  saveUninitialized: true
}));
const userRoutes = require('./routes/user_routes');

app.use('/', userRoutes);






app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
