require("dotenv").config()
const express = require ("express")
const cors = require ("cors")
const dbConnect = require('./config/mongo')
const app = express()


app.use(cors())
app.use(express.json())
port = process.env.PORT || 80
/**
/**
 * Aqui invocamos a las rutas!
 */

app.use("/api", require("./routes"))

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

dbConnect()