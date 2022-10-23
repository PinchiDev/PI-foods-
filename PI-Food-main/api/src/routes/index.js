const { Router } = require('express');
const recipes = require("./recipes");


const router = Router();

router.use("/", recipes)


module.exports = router;
