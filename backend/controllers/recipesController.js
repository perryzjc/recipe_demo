const Recipe = require('../models/Recipe'); 
const contents = require('../controllers/mockContents')
const client = require('../config/db'); // Import the MongoDB client

const getRecipes = async (req, res) => {
  console.log("In getRecipes API");
    try {
        const db = client.db("RecipeBlog");
        const recipes = await db.collection("recipes").find({}).toArray();
        console.log(recipes)
        res.status(200).json(recipes);
        /**console.log(contents["contents"])
        res.status(200).json(contents);*/
    } catch (error) {
        console.error("Failed to retrieve recipes:", error);
        res.status(500).send("Error retrieving recipes");
    }
};

const createRecipe = async (req, res) => {
    try {
        const recipeData = req.body;
        // Convert recipeData to a regular JavaScript object if necessary
        const normalizedRecipeData = Object.assign({}, recipeData);

        console.log("Received recipe data:", normalizedRecipeData);
        // decode json string for instructions for below code
        normalizedRecipeData.instructions = JSON.parse(normalizedRecipeData.instructions);
        console.log("After parse to list: ", normalizedRecipeData);

        //contents["contents"].push(normalizedRecipeData)
        //console.log(contents["contents"])

        const db = client.db("RecipeBlog"); 
        const result = await db.collection("recipes").insertOne(normalizedRecipeData);

        console.log("DB result: ", result);
        
        res.status(201).json({ isSuccess: true, insertedId: result.insertedId });
        //res.status(201).json({ imagePath: normalizedRecipeData.imagePath, isSuccess: true, insertedId: 999999999 });
        //console.log({ imagePath: normalizedRecipeData.imagePath, isSuccess: true, insertedId: 999999999 })

        //res.status(201).json(normalizedRecipeData)
    } catch (error) {
        console.error("Failed to create recipe:", error);
        res.status(500).send("Error creating recipe");
    } 
};

module.exports = {
    getRecipes,
    createRecipe
};


// const contents = [
//   {
//       id: 1,
//       category: "Appetizer",
//       title: "Ham ‘n’ Cheese Biscuit Stacks",
//       author: "Kelly Williams",  
//       instructions: [
//           "Step1. Preheat oven to 400°. Cut biscuits in half to make half-circles; place 2 in. apart on ungreased baking sheets. Spread mustard over tops. Bake until golden brown, 8-10 minutes. Cool completely on wire racks.",
//           "Step2. Mix butter and green onions. In another bowl, mix mustard, mayonnaise and honey. Split each biscuit into 2 layers.",
//           "Step3. Spread biscuit bottoms with butter mixture; top with ham, cheese, romaine and biscuit tops. Spoon mustard mixture over tops. Thread 1 olive onto each toothpick; insert into stacks. Serve immediately."
//       ],
//       // recipe: "Recipe for Appetizer 1",
//   }
// ];
//const client = require('../config/db'); 


// // Controller functions
// const getRecipes = async(req, res) => {
//     // Implement logic to retrieve recipes from the database
//     // Use the 'res' object to send the response
//     // Create Mock Response
//     res.status(200).json(contents);
//   };
    
//     // res.send('TEST getRecipes');
//   // };
  
//   const createRecipe = (req, res) => {
//     // Implement logic to create a new recipe in the database
//     // Use the 'res' object to send the response
//     const recipeData = req.body;
//     console.log("Received recipe data:", recipeData);
//     // Implement logic to create a new recipe in the database using 'recipeData'
//     // This is where you would typically interact with your database

//     // Send the same JSON back as the response
//     res.json({ isSuccess: true });
//   };
  
//   module.exports = {
//     getRecipes,
//     createRecipe
//   };

//const contents = require("./mockContents.js").contents;
