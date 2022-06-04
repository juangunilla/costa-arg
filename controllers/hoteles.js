const res = require('express/lib/response');
const { default: mongoose, model } = require('mongoose');
const{hotelModel} = require ('../models')
const parseId= (id)=> {
    return mongoose.Types.ObjectId(id)
}
/**
 * Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) => {
    const data = await hotelModel.find({});

    res.send({data});
};

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
}

/**
 * insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const { body } = req
    console.log(body)
    const data = await hotelModel.create(body)
    res.send({data})
};
/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {

}
/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {};
module.exports = {getItems, getItem, createItem, updateItem, deleteItem};