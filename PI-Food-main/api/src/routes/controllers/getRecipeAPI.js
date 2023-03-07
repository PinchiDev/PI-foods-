const axios = require("axios");
require("dotenv").config();
const {API_KEY} = process.env;
const foodAPI = require("../../../foodAPI.json")


const getRecipeApi = async function () {
    const apiInfo = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=50`);
    const result = apiInfo?apiInfo.data.results.map((e)=> {
        return {
            id: e.id,
            title: e.title,
            summary: e.summary,
            healthScore: e.healthScore,
            image: e.image,
            dishTypes: e.dishTypes,
            diets:e.diets,
            steps: e.analyzedInstructions[0]?.steps.map((s)=>{
                return {
                    step: s.step,
                    number: s.number,
                    
                }
            }),
        }
    })
    :foodAPI.results.map((e)=> {
        return {
            id: e.id,
            title: e.title,
            summary: e.summary,
            healthScore: e.healthScore,
            image: e.image,
            dishTypes: e.dishTypes,
            diets:e.diets,
            steps: e.analyzedInstructions[0]?.steps.map((s)=>{
                return {
                    step: s.step,
                    number: s.number,
                    
                }
            }),
        }
    });
    return result;
}

module.exports = getRecipeApi;