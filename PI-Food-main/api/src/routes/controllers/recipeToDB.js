const {getRecipeApi} = require("./getRecipeAPI");
const {Recipes, Diet} = require("../../db");

//busco en el base de datos y si no hay nada voy a la api y hago un create en la DB;
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
//        else {return recipeToDB;};

    } catch (error) {
        console.log(error);
    }
}

module.exports = recipeToDB;