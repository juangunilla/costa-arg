const express = require ("express");
const router = express.Router();
const{getItems, getItem, createItem, updateItem} = require("../controllers/comentarios")

router.get("/", getItems);
router.post("/", createItem);
router.put('/_id:', updateItem);
router.search('/id:',getItem);
module.exports = router;