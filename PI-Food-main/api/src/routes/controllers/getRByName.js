const Recipes = require("../../db");
const { Op } = require("sequelize");
const recipesToBb = require("./recipeToDB");

 const getRByName = async (name) => {
  try {
    recipesToBb();
    let info = await Recipes.findAll({
      where: {
        name: {[Op.iLike]: `%${name}%`}
      }
    })
    return info;
  } catch (error) {
    console.log(error)
  }
 };

 module.exports = getRByName;