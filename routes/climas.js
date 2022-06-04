const express = require ("express");
const router = express.Router();
const customMiddle = require("../middleware/customHeaders");
const { validatorCreateItems } = require("../validators/climas");
const{getItems, getItem, createItem, updateItem} = require("../controllers/clima");

router.get("/",  getItems);
router.post("/",customMiddle,createItem);
router.put('/:id', updateItem);
router.search('/:id',getItem);
module.exports = router;