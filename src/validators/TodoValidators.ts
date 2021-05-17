import { NextFunction, Response, Request } from 'express';
import { body, validationResult } from 'express-validator';
import { BaseValidator } from './BaseValidator';



class TodoValidator extends BaseValidator{
  static getTodoValidatorRule=()=>{
    return [
      body('title').notEmpty().withMessage('The title is required'),
      body('description').notEmpty().withMessage('The description is required')
    ];
  }

}

export{TodoValidator};