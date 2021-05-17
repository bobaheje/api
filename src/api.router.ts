/* eslint-disable no-unused-expressions */
import { Router } from 'express';
import { TodoController } from './controllers/api/v1/TodoController';
import { catchError } from './middlewares/error';
import { TodoValidator } from './validators/TodoValidators';




const apiTodoRouter=Router();

//todo

apiTodoRouter.get('/api/v1/todo', catchError(TodoController.findAll));
apiTodoRouter.post('/api/v1/todo', TodoValidator.getTodoValidatorRule(), TodoValidator.validate, catchError(TodoController.create));
apiTodoRouter.put('/api/v1/todo/:id', TodoController.update);
apiTodoRouter.get('/api/v1/todo/:id', TodoController.findOne);
apiTodoRouter.delete('/api/v1/todo/:id', TodoController.delete);

//

export {apiTodoRouter};