const Recipe = require('../models/Recipe'); 
const contents = require("./mockContents").contents;


// Controller functions
const getRecipes = async(req, res) => {
    // Implement logic to retrieve recipes from the database
    // Use the 'res' object to send the response
    // Create Mock Response
    res.status(200).json(contents);
  };
    
    // res.send('TEST getRecipes');
  // };
  
  const createRecipe = (req, res) => {
    // Implement logic to create a new recipe in the database
    // Use the 'res' object to send the response
    const recipeData = req.body;
    console.log("Received recipe data:", recipeData);
    // Implement logic to create a new recipe in the database using 'recipeData'
    // This is where you would typically interact with your database

    // Send the same JSON back as the response
    res.json({ isSuccess: true });
  };
  
  module.exports = {
    getRecipes,
    createRecipe
  };
  