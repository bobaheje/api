import { NextFunction, Response, Request } from 'express';
import { body, validationResult } from 'express-validator';



class TodoValidator{
  static getTodoValidatorRule=()=>{
    return [
      body('title').notEmpty().withMessage('The title is required'),
      body('description').notEmpty().withMessage('The description is required')
    ];
  }

  static validate=(req:Request, res:Response, next:NextFunction)=> {
    const errors=validationResult(req);
    if(errors.array().length>0){
      errors.array().forEach(error => req.flash('errors', error.msg));
      return res.redirect('/dashboard/user');
    }
    next();
  }
}

export{TodoValidator};