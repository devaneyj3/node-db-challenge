const express = require('express')

const db = require('./db-helpers');

const error = require('./middleware')

const router = express.Router();

//POST add a resource

router.post('/resource', async (req, res) => {
    await db.addResource(req.body)
    try {
        res.status(200).send(req.body)
    } catch {
        error.dbError()
    }
})

router.get('/recipes/:id/shoppingList', async (req, res) => {
    const { id } = req.params;
    const shoppingList = await db.getShoppingList(id);
    try {
        res.status(200).send(shoppingList)

    } catch {
        error.dbError()
    }
})

router.get('/recipes/:id/instructions', async (req, res) => {
    const { id } = req.params;
    const instructions = await db.getInstructions(id);
    console.log(instructions)
    try {
        res.status(200).send(instructions)

    } catch  {
        error.dbError()
    }
})
router.get('/ingredients/:id/recipes', async (req, res) => {
    const { id } = req.params;
    const recipesOfIngredient = await db.getRecipesOfIngredient(id);
    console.log(recipesOfIngredient)
    try {
        res.status(200).send(recipesOfIngredient)

    } catch {
        error.dbError()
    }
})

module.exports = router;

