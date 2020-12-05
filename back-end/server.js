const express= require('express');
const fs= require('fs');
const path= require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const Cors = require('cors');
const sequelize = require('./util/database');
const user = require('./models/user');
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const multer = require('multer');
require("dotenv").config();

//MULTER
// const filestorage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'images');
//     },
//     filename:(req,file,cb)=>{
        
//         cb(null, new Date().toISOString().replace(/:/g,'-')+'-'+file.originalname);
//     }
// });
// const fileFilter=(req,file,cb)=>{
//     if(file.mimetype == 'image/jpg' || file.mimetype =='image/png' || file.mimetype =='image/jpeg'){
//         cb(null,true);
//     }
//     else{
//         cb(null,false);
//     }

// }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/images',express.static(path.join(__dirname,'images')));
app.use(Cors({
    origin: ["http://localhost:3000"],
    methods:["GET", "POST"],
    credentials: true
}));

app.use(cookieParser());
app.use(session({
    key:"username",
    secret:"appu703453",
    resave:false,
    saveUninitialized: false,
    cookie:{
        expires: 60 * 60 * 24,
    },
}));

app.use(express.json());
// app.use(multer({storage:filestorage,fileFilter:fileFilter}).single('data'));

const verifyJWT = (req,res,next) => {
    const token = req.headers["x-access-token"];

    if(!token) {
        res.send("NO TOKEN FOUND!!");
    }else {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
           if(err){
                res.json({auth:false, message:"Failed to Auth"});
           } else{
               req.id = decoded.id;
               next();
           }
        })
    }
};


app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");

    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();

});



app.post('/signup',(req,res,next)=>{

            const password = req.body.password;

            bcrypt.hash(password,saltRounds, (err, hash) =>{
                user.create({

                    // name:req.body.name,
                    email:req.body.email,
                    username:req.body.username,
                    password:hash,
                    address:req.body.address,
                    phoneno:req.body.phoneno,
            
                }).then(r=>{

                        const username = user.username;
                        const token = jwt.sign({username}, process.env.SECRET, {
                            expiresIn: 7200,
                        });
                        res.status(200).json({message:"signup succesfull",auth:true, token:token})
                    })
                    .catch(err=>{
                        err.statusCode = 403;
                        err.message = "username already registered!! choose another";
                        res.send(err.message);
                        next(err);
                  });
            })
            
    

});
app.post('/login',(req,res)=>{

        user.findByPk(req.body.username).then(user=>
            {
               
                if(user){
                    
               bcrypt.compare(req.body.password, user.password, (err, response) => {
                   if(response){
                    
                    req.session.user = user;

                    const username = user.username;
                    const token = jwt.sign({username}, process.env.SECRET, {
                        expiresIn: 7200,
                    });
                    // console.log(req.session.user);
                    res.status(200).json({auth:true, token: token});
    
                   }else{
                    res.json({auth:false,message:"wrong combinations!!"});
                   }
               })
            }
            else{
        //    res.status(404).send({message:"No user found!!"});
           res.json({auth:false,message:"No user found!!"});
            }
        }).catch(err=>console.log(err));
    
});

app.get('/isAuth', verifyJWT ,(req, res) => {
    res.send("User Is Authenticated");
});

// app.get('/login', (req, res) => {
//     if (req.session.user){
//         res.send({loggedIn: true, user: req.session.user});
//     }else{
//         res.send({loggedIn:false});
//     }
// });
app.get('/:username/user',verifyJWT,(req,res,next)=>{
    user.findByPk(req.params.username).then(user=>{
        res.status(200).json({

            // name:user.name,
            email:user.email,
            address:user.address,
            phoneno:user.phoneno,
            username:user.username,
            // image:user.image
        });

    }).catch(err=>{console.log(err)})

});

app.get('/:username/page',(req,res,next)=>{
    user.findByPk(req.params.username).then(user=>{
        res.status(200).json({

            name:user.name,
            email:user.email,
            address:user.address,
            phoneno:user.phoneno,
            username:user.username,
            image:user.image
        });

    }).catch(err=>{console.log(err)})

});

// app.use((error,req,res,next)=>{
//     console.log(error);
//     const status = error.statusCode || 500;
//     const message = error.message;
//     res.status(status).send();
//     console.log(status);
// });

app.post('/:username/images',(req,res)=>{
    user.findByPk(req.params.username).then(user=>{
        const p = user.image;
        console.log(req.file);
        console.log(p);
        user.update({image:req.file.path}).then(r=>{
            res.status(200).json({path:req.file.path});
            if(p){
            fs.unlink(p,function (err){
                if(err) throw err;
                console.log('file deleted');
        })}


        }).catch(err=>console.log(err)) ;
        
       
           
        }
       
       
    ).catch(err=>{console.log(err)})



    console.log(req.file);

});

sequelize.sync().then(r=>{
    // console.log(r);
    app.listen(process.env.PORT || 8001);
}).catch(err=>console.log(err));


