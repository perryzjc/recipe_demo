const express = require('express');
const router = express.Router();
const { getRecipes, createRecipe, getRecipeById, updateRecipe, deleteRecipe } = require('../controllers/recipesController');

// Define routes
router.get('/', getRecipes);
router.post('/', createRecipe);
/**router.get('/:id', getRecipeById);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);*/

module.exports = router;
