const express = require("express");
const cors = require('cors') 
const client = require('./config/db');

const app = express();

// Connect db
client.connect();

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

client.db("admin").command({ ping: 1 });
console.log("Pinged your deployment. You successfully connected to MongoDB!");

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
