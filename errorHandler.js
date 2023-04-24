const {constants, consants} = require("../constants");
const errorHandler = (err, req, res,next)=>{
     const statusCode = res.statusCode? res.statusCode :500;

     switch (statusCode) {
          case consants.NOT_FOUND:
               res.json({Title: "Not Found",
               message:err.message,
               stackTrace:err.stack});               
               break;
          case consants.VALIDATION_ERROR:
               res.json({Title: "Validation Failed",
               message:err.message,
               stackTrace:err.stack});
               break;
          case consants.FORBIDDEN:
               res.json({Title: "Forbidden",
               message:err.message,
               stackTrace:err.stack});
               break;               
          case consants.UNAUTHORISED:
               res.json({Title: "Unauthorised",
               message:err.message,
               stackTrace:err.stack});
               break;
          case consants.SERVER_ERROR:
               res.json({Title: "Server Error",
               message:err.message,
               stackTrace:err.stack});
               break;                 
          default:
               break;
     }
     
     
}

module.exports = errorHandler;