const express = require('express');
const router = express.Router();
const { getRecipes, createRecipe, getRecipeById, updateRecipe, deleteRecipe } = require('../controllers/recipesController');

const multer = require('multer');

// Configure Multer
const storage = multer.memoryStorage(); // This will store files in memory
const upload = multer({ storage: storage });

// Define routes
router.get('/', getRecipes);
router.post('/', upload.single('image'), createRecipe);
/**router.get('/:id', getRecipeById);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);*/

module.exports = router;
