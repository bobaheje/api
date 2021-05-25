/* eslint-disable no-unused-expressions */
import { Router } from 'express';
import { AuthController } from '../controllers/api/v1/AuthController';
import { TodoController } from '../controllers/api/v1/TodoController';
import { catchError } from '../middlewares/error';
import { TodoValidator } from '../validators/TodoValidators';




const apiTodoRouter=Router();

//todo

apiTodoRouter.get('/api/v1/todo', AuthController.autorisation, catchError(TodoController.findAll));
apiTodoRouter.post('/api/v1/todo', AuthController.autorisation, TodoValidator.getTodoValidatorRule(), TodoValidator.validate, catchError(TodoController.create));
apiTodoRouter.put('/api/v1/todo/:id', AuthController.autorisation, TodoController.update);
apiTodoRouter.get('/api/v1/todo/:id', AuthController.autorisation, TodoController.findOne);
apiTodoRouter.delete('/api/v1/todo/:id', AuthController.autorisation, TodoController.delete);

//

export {apiTodoRouter};