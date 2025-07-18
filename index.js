const express = require('express');
const app = express();
const PORT = 3045;

// Middleware
// app.use(express.urlencoded({ extended: true }));

// // Set view engine
// app.set('view engine', 'ejs');

// Routes


const userRoutes = require('./routes/user_routes');

app.use('/', userRoutes);






app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
