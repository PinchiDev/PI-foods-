const {getRecipeApi} = require("./getRecipeAPI");
const {Recipes, Diet} = require("../../db");


const recipeToDB = async ()=> {
    try {
        const recipeToDB = await Recipes.findAll(
        {
            include: {model: Diet} 
        });
        if(!recipeToDB.length) {
            const recipesApi = await getRecipeApi();
            await Recipes.bulkCreate(recipesApi);
        }
//        return recipeToDB;
    } catch (error) {
        console.log(error);
    }
}

module.exports = recipeToDB;