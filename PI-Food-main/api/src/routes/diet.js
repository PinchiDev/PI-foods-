const { Router } = require("express");
const router = Router();
const {Diet} = require("../db")
require("sequelize");


const dietsRest = [
    {name:"Lacto Vegetarian"},
    {name:"Ovo Vegetarian"},
    {name:"Paleo"},
    {name:"Pescetarian"},
    {name:"Primal"},
    {name:"Vegan"},
    {name:"Vegetarian"},
    {name:"Low FODMAP"},
    {name:"Ketogenic"},
    {name:"Whole 30"},
    {name:"Gluten Free"},
    {name:"Fruitarian"}
];
// const dietsRest = {  
//     Lacto Vegetarian,
//     Ovo Vegetarian,
//     Paleo,
//     Pescetarian,
//     Primal,
//     Vegan,
//     Vegetarian,
//     Low FODMAP,
//     Ketogenic,
//     Whole 30,
//     Gluten Free,
//     Fruitarian
// }
// ;

 const dietToDB = async ()=>{
//console.log(Diet);
    const dietsInDb = await Diet.findAll();
//console.log(dietsInDb);
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


module.exports = router;