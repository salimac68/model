const express = require('express');
const signupRouter = express.Router();
const Signupdata = require('../model/Signupdata')

function router(nav){
signupRouter.get('/',function(req,res){
    res.render('signup',{
        nav,
        title: 'Library'
    })
})

signupRouter.post('/added',function(req,res){
    var item = {
        name: req.body.name,
        address: req.body.address,
        gender: req.body.gender,
        DOB: req.body.DOB,
        email: req.body.email,
        phone_number: req.body.number,
        password: req.body.password,
        cp: req.body.confirmpassword
    }
    
    var signup = Signupdata(item);
    signup.save();
    res.redirect('/login');
});

return signupRouter;
}
module.exports = router;