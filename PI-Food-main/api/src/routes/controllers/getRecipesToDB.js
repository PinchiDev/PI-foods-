const {Recipes, Diet} = require("../../db")

const getRecipesToDB = async () => {
    try {
      let recipesDb = await Recipes.findAll({
        include: { model: Diet },
      });
      return recipesDb;
    } catch (error) {
      console.log(error);
    }
  };

module.exports = getRecipesToDB;
