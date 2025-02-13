const jwt=require('jsonwebtoken')

const authenticateUser=(req,res,next)=>{
    const token = req.headers['authorization']
    if(token){
        try{
            const tokenData=jwt.verify(token,process.env.JWT_secret)
            //console.log(tokenDate)
            next()
        }catch(e){
            res.status(401).json(e)
        }
    }else{
        res.status(401).json({error:'token is required'})//401:unauthorized user not logged in
    }
}
module.exports = authenticateUser