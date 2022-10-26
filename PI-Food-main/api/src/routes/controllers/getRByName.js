const Recipes = require("../../db");
const { Op } = require("sequelize");
const recipesToBb = require("./recipeToDB");

 const getRByName = async (title) => {
  try {
    await recipesToBb();
    let info = await Recipes.findAll({
      where: {
        title: {[Op.iLike]: `%${title}%`}
      }
    })
    return info;
  } catch (error) {
    console.log(error)
  }
 };

 module.exports = getRByName;