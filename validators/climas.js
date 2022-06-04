const{check} = require("express-validator");
const validateResults = require("../utils/handleValidator");
const validatorCreateItems = [
    check ("Ciudad")
    .exists()
    .notEmpty(),
    check ("img")
    .exists()
    .notEmpty(),
    check ("Descripcion")
    .exists()
    .notEmpty(),
    check ("Humedad")
    .exists()
    .notEmpty(),
    check ("Viento")
    .exists()
    .notEmpty(),
    check ("Direccion")
    .exists()
    .notEmpty(),
    check ("tMax")
    .exists()
    .notEmpty(),
    check ("tMin")
    .exists()
    .notEmpty(),
    check ("inUv")
    .exists()
    .notEmpty(),
    (req, res, next)=>{
        return validateResults(req, res, next)
    }
];

module.exports ={validatorCreateItems}