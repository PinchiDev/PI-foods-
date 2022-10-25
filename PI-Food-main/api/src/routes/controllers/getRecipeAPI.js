const axios = require("axios");
require("dotenv").config();
const {API_KEY} = process.env;


const getRecipeApi = async function () {
    const apiInfo = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`);
    const result = apiInfo.data.results.map((e)=> {
        return {
            id: e.id,
            title: e.title,
            summary: e.summary,
            healthScore: e.healthScore,
            image: e.image,
            steps: e.analyzedInstructions[0]?.steps.map((s)=>{
                return {
                    number: s.number,
                    steps: s.steps
                }
            }),
        }
    });

    return result;
}

module.exports = getRecipeApi;