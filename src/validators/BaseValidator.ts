import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

class BaseValidator{
  
  static validate=(req:Request, res:Response, next:NextFunction)=> {
    const errors=validationResult(req);
    if(errors.array().length>0){
      return res.status(420).json(errors);
    }
    next();
  }
}

export {BaseValidator};