const getRecipeApi = require("./getRecipeAPI");
const getRecipesDB = require("./getRecipesDB");

const getAll = async () => {
const apiInfo = await getRecipeApi();
const dbInfo = await getRecipesDB();
const totalInfo = apiInfo.concat(dbInfo);
return totalInfo;
};

module.exports = getAll;