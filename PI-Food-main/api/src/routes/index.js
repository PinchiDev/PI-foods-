const { Router } = require('express');
const recipes = require("./recipes");
const diet = require("./diet");


const router = Router();

router.use("/", recipes)
router.use("/", diet)

module.exports = router;
