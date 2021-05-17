import { body } from 'express-validator';
import { BaseValidator } from './BaseValidator';



class UserValidator extends BaseValidator{
  static getUserValidatorRule=()=>{
    return [
      body('firstname').notEmpty().withMessage('The name is required'),
      body('lastname').notEmpty().withMessage('The last is required'),
      body('email').isEmail().withMessage('Enter a valid email')
    ];
  }
}

export {UserValidator};