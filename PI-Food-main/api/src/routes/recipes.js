const { Router } = require("express");
require("dotenv").config();
const router = Router();
const getAll = require("./controllers/getAll");
const {Recipes, Diet} = require("../db");


const getRByName = async (title) => {
  try {
    const infoAll = await getAll();
    const tituloFiltrado = infoAll.filter(n => n.title.toLowerCase().includes(title));
    return tituloFiltrado;
  } catch (error) {
    console.log(error)
  }
 };
 

 const getRById = async (id) => {
  try {
    const infoAllId = await getAll();
    const IdFiltrado = infoAllId.filter((n) => n.id == id);
    return IdFiltrado;
  } catch (error) {
    console.log(error)
  }
 };



////////////////////////////////////////////////////////////////
//si no hay una query traeme todo, si hay guardame todo en la DB y buscalo desde ahi para devolverlo.
router.get("/recipes", async (req,res) => {

  const {title} = req.query;
  
  if(title){
      const receta = title.toLowerCase();
      const recetaAPI = await getRByName(receta);

      if(!recetaAPI) {
        return res.status(200).send("Bad Query")
      } else {
        return res.status(200).send(recetaAPI)
      }
} else  {
    const allInfo = await getAll();
    return res.status(200).send(allInfo)
  }});

////////////////////////////////////////////////////////////////
router.get("/recipes/:id", async (req,res) => {
  const { id } = req.params;
  try {
    if(id){
      const recipeFiltered = await getRById(id);
//      console.log(recetaAPI);
      if(!recipeFiltered) {
        return res.status(200).send("Bad Query")
      } else {
        return res.status(200).send(recipeFiltered)
      }
} else  {
    return res.status(400).send("Wrong ID")
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