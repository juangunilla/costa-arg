const mongoose = require("mongoose")

const restaurantesScheme = new mongoose.Schema(
    {
        Ciudad:{
            type:String,
        },
        nombre:{
            type:String,
        },
        img:{
            type:String,
        },
        Descripcion:{
            type:String,
        },
        link:{
            type:String,
        }
    },
    {
        timestamps:true,
        versionkey:false
    }
);

module.exports = mongoose.model("restaurantes", restaurantesScheme)