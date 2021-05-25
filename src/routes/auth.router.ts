import { Router } from 'express';
import { AuthController } from '../controllers/api/v1/AuthController';
import { catchError } from '../middlewares/error';


const apiAuthRouter=Router();

//auth


apiAuthRouter.post('/api/v1/login', catchError(AuthController.login));


//

export {apiAuthRouter};