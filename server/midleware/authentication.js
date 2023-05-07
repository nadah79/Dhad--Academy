var jwt = require('jsonwebtoken');
const response= require('../utils/response')


const isUser = async (req, res, next) => {
  

  const authToken = req.headers.authorization;
  if (!authToken) {
    return response(res, 403, 'Not authorized', 'Please log in');
  }

  const token = authToken.split(' ')[1];


  try {
    const verifyToken = jwt.verify(token, process.env.TOKEN);
    

    req.user = verifyToken;
    if (req.user.blocked) {
      return response(res, 401, 'You are blocked');
    }

    next();
  } catch (error) {
    console.log('Error verifying token:', error);
    return response(res, 401, 'Invalid token', 'Please log in', error);
  }
};
















// const isUser =async (req,res,next) => {
// console.log("token")
//     const authtoken = req.headers.authorization;
// console.log(authtoken)
// if(!authtoken){
// return    response(res,403,"not authorized","please loggin");
// }
// const token = authtoken.split(' ')[1];
// console.log(token)
// try {
// const verifytoken =  jwt.verify(token,process.env.TOKEN)
// console.log(verifytoken)
// req.user=verifytoken;
// if (req.user.blocked) {
// return    response(res,401,"you are blocked ");
    
// }
// next()

    
// } catch (error) {
// return    response(res,401,"invalid token","please loggin",error);
    
// }



  
// }


const isAdmin = (req,res,next) => {
  
  isUser(req,res,() => {
     
      if(req.user.admin=="Admin"){
        next()
      }else{
        response(res,403,"only admin can access this")
      }
    })



  
}



module.exports={isUser,isAdmin}