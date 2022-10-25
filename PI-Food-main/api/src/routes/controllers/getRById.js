const { Recipes, Diet } = require("../../db");
const { Op } = require("sequelize");
const getAll = require("./getAll");

const getRById = async (id)=> {
  try {
   await getAll();
   if(id){
    const info = await Recipes.findAll({
      where: {
                id: {[Op.iLike]: `%${id}%`}
              },
      include: [{
        model: Diet,
      }]
    })
    return info;
   }
  } catch (error) {
    console.log(error.message)
  }
};

module.exports = getRById;