
const db = require('./db-config');

module.exports = {
    addResource,
    getShoppingList,
    getInstructions,
    getRecipesOfIngredient
}

//GET recipes

function addResource(resource) {
    return db('Resource').insert({'Name': resource.Name, 'Description': resource.Description})
}

// GET ingrendeints for a recipe

function getShoppingList(recipe_id) {
    return db('ingredients as i')
        .join('recipes as r', 'r.id', 'ri.recipe_id')
        .join('recipes-ingredients as ri', 'i.id', 'ri.ingredient_id')
        .where('r.id', recipe_id)
        .select('i.name', 'i.quantity')
}

//GET instructions for a recipe

function getInstructions(recipe_id) {
    return db('steps as s')
        .join('recipes-steps as rs', 'rs.step_id', 's.id')
        .join('recipes as r', 'r.id', 'rs.recipe_id')
        .where('r.id', recipe_id)
        .select('s.instructions')
}

//GET recipes that use a single ingredient

function getRecipesOfIngredient(id) {
    return db('ingredients as i')
        .join('recipes-ingredients as ri', 'i.id', 'ri.ingredient_id')
        .join('recipes as r', 'r.id', 'ri.recipe_id')
        .where('i.id', id)
        .select('r.name')


}