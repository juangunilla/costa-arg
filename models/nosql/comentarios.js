const mongoose = require("mongoose")

const comentariosSheme = new mongoose.Schema(
    {
        restaurante:{
            type:String,
        },
        usuario:{
            type:String,
        },
        valoracion:{
            type:String,
        },
        comentario:{
            type:String,
        }
    },
    {
        timestamps:true,
        versionkey:false
    }
);
module.exports = mongoose.model("comentarios", comentariosSheme)