const express = require('express');

const loginRouter = express.Router();
// const signupRouter = express.Router();

const app = express();
const nav = [
    {link:'/books',name:'books'},{link:'/login',name:'login'},{link:'/signup',name:'signup'},{link:'/authors',name:'authors'},{link:'/admin',name:'add book'},{link:'/auth',name:'add author'}
];
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const adminRouter = require('./src/routes/adminRoutes')(nav)
const signupRouter = require('./src/routes/signupRoutes')(nav)
const authRouter = require('./src/routes/authRoutes')(nav)


app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/admin',adminRouter);
app.use('/auth',authRouter);


app.get('/',function(req,res){
    res.render("intex",
    {
        nav,
        title:'Library'
    });
});



loginRouter.get('/',function(req,res){
    res.render("login",
    {
        nav,
        title:'Welcome'    
    });
});

signupRouter.get('/',function(req,res){
    res.render("signup",
    {
        nav,
        title:'Hurry Up!!!'  
    });
});



app.listen(5000);