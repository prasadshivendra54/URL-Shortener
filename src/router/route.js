const express = require('express');
const urlController = require('../controllers/urlController');
const middleware = require('../middleware/middleware');
const router = express.Router();

//Short the url
router.post('/url/shorten', middleware.validURL, urlController.shortURL);


//Urlcode redirection
router.get('/:urlCode', middleware.validPathParam, urlController.showURL);


//No urlCode
router.get('/',(req,res)=>{
    return res.status(400).send({status:false,message:"Please provide path params"});
})

// export router
module.exports = router;