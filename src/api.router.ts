/* eslint-disable no-unused-expressions */
import { Router } from 'express';
import { TodoController } from './controllers/api/v1/TodoController';
import { UserController } from './controllers/api/v1/UserController';
import { catchError } from './middlewares/error';
import { TodoValidator } from './validators/TodoValidators';
import { UserValidator } from './validators/UserValidator';

const apiTodoRouter=Router();

//todo

apiTodoRouter.get('/api/v1/todo', catchError(TodoController.findAll));
apiTodoRouter.post('/api/v1/todo', TodoValidator.getTodoValidatorRule(), TodoValidator.validate, catchError(TodoController.create));
apiTodoRouter.put('/api/v1/todo/:id', TodoController.update);
apiTodoRouter.get('/api/v1/todo/:id', TodoController.findOne);
apiTodoRouter.delete('/api/v1/todo/:id', TodoController.delete);

//
apiTodoRouter.get('/api/v1/user', UserController.findAll);
apiTodoRouter.post('/api/v1/usr', UserValidator.getUserValidatorRule(), UserValidator.validate, catchError(UserController.create));
apiTodoRouter.get('/api/v1/user/:id', UserController.findOne);
apiTodoRouter.put('/api/v1/user/:id', UserController.update);
apiTodoRouter.delete('/api/v1/user/:id', UserController.delete);
export {apiTodoRouter};