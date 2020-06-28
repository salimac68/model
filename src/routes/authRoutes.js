const express = require('express');
const authRouter = express.Router();
const Authordata = require('../model/Authordata')

function router(nav){
authRouter.get('/',function(req,res){
    res.render('addauthor',{
        nav,
        title: 'Library'
    })
})

authRouter.post('/adding',function(req,res){
    var item = {
        author: req.body.author,
        occupation: req.body.occupation,
        about: req.body.about,
        image: req.body.image,
    }
    
    var author = Authordata(item);
    author.save();
    res.redirect('/authors');
});

// authRouter.get('/delete/:id',function(req,res){
//     var bid=req.params.id;
//     Authordata.deleteOne({_id:bid})
//     .then(function(authors){
//         res.redirect('authors',{

//         });
//     })
// })

return authRouter;
}
module.exports = router;