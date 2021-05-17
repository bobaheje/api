import { Router } from 'express';
import { UserController } from './controllers/api/v1/UserController';
import { catchError } from './middlewares/error';
import { UserValidator } from './validators/UserValidator';



const apiUserRouter=Router();

//user

apiUserRouter.get('/api/v1/user', catchError(UserController.findAll));
apiUserRouter.post('/api/v1/user', UserValidator.getUserValidatorRule, UserValidator.validate, catchError(UserController.create));
apiUserRouter.put('/api/v1/user/:id', catchError(UserController.update));
apiUserRouter.get('/api/v1/user/:id', catchError(UserController.findOne));
apiUserRouter.delete('/api/v1/user/:id', catchError(UserController.delete));

//

export {apiUserRouter};