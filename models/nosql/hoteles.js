const mongoose = require("mongoose")

const hotelScheme =new mongoose.Schema(
    {
        ciudad:{
            typo:String,
        },
        nombre:{
            type:String,
        },
        img:{
            type:String,
        },
        descripcion:{
            type:String,
        },
        sitio:{
            type:String,
        }
    },
        {
            timestamps:true,
            versionKey:false
        }
);
module.exports= mongoose.model("hotel", hotelScheme)