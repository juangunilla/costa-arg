const customMiddle = (req, res, next) => {
try {
    const apikey =req.headers.api_key;
    if(apikey === 'costa-arg-0306'){
        next()
    }else{
        res.status(403)
        res.send({error:"ALGO_OCURRIO_key"})
    }
} catch (e) {
    res.status(403)
        res.send({error:"ALGO_OCURRIO"})
}
}

module.exports = customMiddle