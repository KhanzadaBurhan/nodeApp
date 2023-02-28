const jWtoken = require('jsonwebtoken');
const sec = "ajksdhfush";

const isLoggedIn = (req,res,next)=>{
    if (req.headers && req.headers.token) {
        var decoded = jWtoken.verify(req.headers.token, sec);
        console.log(decoded)
        req.email = decoded.email;
        next();
    }else{
        return res.status(401).json({
            message: 'Invalid Token'
        })
    }
}

module.exports={isLoggedIn};