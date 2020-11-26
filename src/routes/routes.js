const {Router} = require('express');
const router = Router();
const path = require('path')

router.get('/', (req,res) =>{
    res.render('index');
})



module.exports = router;