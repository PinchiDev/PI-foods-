const { Router } = require("express");
const router = Router();
const {Diet} = require("../db")
require("sequelize");


const dietsRest = [
    {name:"dairy free"},
    {name:"frutarian"},
    {name:"lacto ovo vegetarian"},
    {name:"gluten free"},
    {name:"ketogenic"},
    {name:"lacto Vegetarian"},
    {name:"low FODMAP"},
    {name:"ovo Vegetarian"},
    {name:"paleolithic"},
    {name:"pescetarian"},
    {name:"primal"},
    {name:"vegan"},
    {name:"vegetarian"},
    {name:"whole 30"}
];


 const dietToDB = async ()=>{
    const dietsInDb = await Diet.findAll();
    if(dietsInDb.length) {
    return dietsInDb;
    } else {
    const createDiets = await Diet.bulkCreate(dietsRest);
    
    return createDiets;

    }
 }

router.get("/diets", async (req,res)=> {
    const dietDB = await dietToDB();
try {
    if(dietDB) {
        return res.status(200).send(dietDB);
    }
} catch (error) {
    return res.status(404).send("No diets in DB");
}
});


module.exports = {router, dietToDB};