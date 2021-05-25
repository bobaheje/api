import { Router } from 'express';
import { AuthController } from '../controllers/api/v1/AuthController';
import { UserController } from '../controllers/api/v1/UserController';
import { catchError } from '../middlewares/error';
import { UserValidator } from '../validators/UserValidator';



const apiUserRouter=Router();

//user

apiUserRouter.get('/api/v1/user', catchError(UserController.findAll));
apiUserRouter.post('/api/v1/user', AuthController.autorisation, UserValidator.getUserValidatorRule(), UserValidator.validate, catchError(UserController.create));
apiUserRouter.put('/api/v1/user/:id', AuthController.autorisation, catchError(UserController.update));
apiUserRouter.get('/api/v1/user/:id', AuthController.autorisation, catchError(UserController.findOne));
apiUserRouter.delete('/api/v1/user/:id', AuthController.autorisation, catchError(UserController.delete));

//

export {apiUserRouter};