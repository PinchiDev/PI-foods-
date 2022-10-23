const {Recipes, Diet} = require("../../db")

const getRecipeDB = async function () {
    let recipes = await Recipes.findAll({
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }})
    return recipes
}

module.exports = getRecipeDB;
