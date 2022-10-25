const getRecipeApi = require("./getRecipeAPI");
const getRecipesToDB = require("./getRecipesToDB");

const getAll = async () => {
const apiInfo = await getRecipeApi();
const dbInfo = await getRecipesToDB();
const totalInfo = apiInfo.concat(dbInfo);
return totalInfo;
};

module.exports = getAll;