const validator = require('validator')
// const axios = require('axios')

const validURL = async (req,res,next) => {
    try {
        const longURL = req.body.longUrl;
        if (!longURL) return res.status(400).json({status: false, message: "URL not given"})

        if (!validator.isURL(longURL)) return res.status(400).send({ status: false, msg: "invalid longUrl" })

        // let checkURL = await axios.get(longURL).then(() => longURL).catch(() => null)
        // if(!checkURL) return res.status(400).send({status : false, message : "invalid longUrl"})    

        next();
        
    } catch(err) {
        res.status(500).json({status: false, message: err.message})
    }
}

const validPathParam = async (req, res,next)=> {
    try {
        const urlCode = req.params.urlCode;

        // validate path params
        const idRegex = /^[a-z0-9_-]+$/;
        if (!idRegex.test(urlCode)) {
            return res.status(400).json({status: false, message: "Invalid URL code"});
        }
        next();
    } catch(err) {
        res.status(500).json({status: false, message: err.message})
    }
}

// export middleware
module.exports = { validURL, validPathParam }