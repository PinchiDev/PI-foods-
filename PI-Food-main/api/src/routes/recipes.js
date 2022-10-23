const { Router } = require("express");
// const getAllInfo = require("./controllers/getAllInfo");
require("dotenv").config();
const router = Router();
const getRByName = require("./controllers/getRByName");
const {API_KEY} = process.env;
const axios = require("axios");
const getRecipeAPI = require("./controllers/getRecipeAPI");


router.get("/recipes", async (req,res) => {
  const { name } = req.query;
    
      if(!name){
        try {
            const apiInfo = await getRecipeAPI();
            return res.status(200).send(apiInfo);
        } catch (error) {
            console.log(error.message);
            return res.status(404).send("No recipe found");
        }
        
      } else{
        const filteredNames = await getRByName();
        res.status(200).send(filteredNames);
      };
});

module.exports = router;