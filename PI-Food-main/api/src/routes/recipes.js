const { Router } = require("express");
require("dotenv").config();
const router = Router();
const getAll = require("./controllers/getAll");
const getRById = require("./controllers/getRById");
const {Recipes, Diet} = require("../db");
const {Op} = require("sequelize");


const getRByName = async (title) => {
  try {
    await getAll();
    let info = await Recipes.findAll({
      attributes: ["title"],
      where: {
        title: {[Op.iLike]: `%${title}%`}
      },
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: []
        }
      }
    })


    const recipes = info.map(receta => ({
      id: receta.id,
      title: receta.title,
      image: receta.image,
      healthScore: receta.healthScore,
      // steps: receta.analyzedInstructions[0]?.steps.map((a)=>{
      //   return {
      //     number: a.number,
      //     step: a.step
      //   }
      // }),
      summary: receta.summary,
  
  }))

  return recipes;


  } catch (error) {
    console.log(error)
  }
 };



////////////////////////////////////////////////////////////////
router.get("/recipes", async (req,res) => {
  const { title } = req.query;
    
  try {
    if(!title){
      const apiInfo = await getAll();
      return res.status(200).send(apiInfo);  
        
  } else{
    const filteredNames = await getRByName(title);
    res.status(200).send(filteredNames);
  }
  }catch (error) {
    return res.status(404).send("No recipe found");
  }
});

////////////////////////////////////////////////////////////////
router.get("/recipes/:id", async (req,res) => {
  const { id } = req.params;
  try {
    if(id){
      const idRecipe = await getRById();
      return res.status(200).send(idRecipe);
    }
 
  } catch (error) {
    console.log(error.message);
    return res.status(404).send("No recipe found");
  }
});
////////////////////////////////////////////////////////////////

router.post("/recipes", async (req,res) => {
  const { title, summary, healthScore, image, steps, diets} = req.body;
try {
  if(!title || !summary || !healthScore || !image || !steps){

    const recipePost = await Recipes.create({
      
      title,
      summary,
      healthScore,
      image,
      diets
      
    })
    let dietsDb = await Diet.findAll({ attributes: ["name"] })
    recipePost.addDiet(dietsDb);
  
    return res.status(200).send( recipePost);
  }
} catch (error) {
  console.log(error.message);
  return res.status(404).send("Recipe already exist")
}

});
////////////////////////////////////////////////////////////////


module.exports = router;