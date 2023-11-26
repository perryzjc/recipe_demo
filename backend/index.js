const express = require("express");
const cors = require('cors') 
const {connectDB, getDb } = require("./config/db");

// Connect to the database
let db;
connectDB((err) => {
  if (!err) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    db = getDb();
  }
});

const app = express();

// CORS
app.use(cors())

// Middlewares
app.use(express.json()); // For parsing application/json

// Import routes
const recipeRoutes = require("./routes/recipeRoutes");
const userRoutes = require("./routes/userRoutes");

// Routes middleware
app.use("/api/recipes", recipeRoutes);
app.use("/api/users", userRoutes);

// Error handling middleware
const { errorHandler } = require("./middleware/errorHandler");
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
