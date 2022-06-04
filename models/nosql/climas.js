const mongoose = require("mongoose")

const ClimasScheme = new mongoose.Schema(
    {
        Ciudad:{
            type:String,
        },
        img:{
            type:String,
        },
        Descripcion:{
            type:String,
        },
        Humedad:{
            type:String,
        },
        Viento:{
            type:String,
        },
        Direccion:{
            type:String,
        },
        tMax:{
            type:String,
        },
        tMin:{
            type:String,
        },
        inUv:{
            type:String,
        }
    },
    {
        timestamps:true,
        versionkey:false
    }
);

module.exports = mongoose.model("climas", ClimasScheme)