/* eslint-disable no-console */
import { getModelForClass } from '@typegoose/typegoose';
import { NextFunction, Request, Response } from 'express';
import { sign, verify } from 'jsonwebtoken';
import { User } from '../../../models/user/User';

class AuthController {
  static model=getModelForClass(User);
  static login=async (req:Request, res:Response, next:NextFunction)=>{
    // eslint-disable-next-line no-debugger
    
    console.log(req.body);
    try{
      const {user}=await AuthController.model.authenticate()(req.body.email, req.body.password);
      if(user){
        const jwtToken= sign(
          {
            exp:Math.floor(Date.now()/1000)+ (30*process.env.JWT_EXP||60),
          data:user.id
          },
          process.env.JWT_SECRET
        );
        res.json(user);
        console.log(jwtToken);
      }
      else{
        res.status(401).json({'error':'Bad credentials'});
      }
    }
    catch(e){
      res.status(401).json({'error':e.msg});
    }
   
    
  };

  static autorisation=async(req:Request, res:Response, next:NextFunction)=>{
    let token;
    try {
      if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token=req.headers.authorization.split(' ')[1];
        const decode=await verify(token, process.env.JWT_SECRET);
        //console.log(token);
        //console.log(decode);
      }
      else{
        res.status(401).json({'error':'Bad credentials'});
      }
    }
    catch(e){
      res.status(401).json({'error':e.msg});
    }
    next();
    

  };
};
export {AuthController};


      