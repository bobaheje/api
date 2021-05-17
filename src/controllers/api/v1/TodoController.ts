import { getModelForClass } from '@typegoose/typegoose';
import { Request, Response, static } from 'express';
import { Todo } from '../../../models/todo/Todo';

class TodoController {
  static todoModel=getModelForClass(Todo);
  public static findAll=(res:Request, res:Response)=>{
    return res.render();
  }

  public static async create=(req:Request, res:Response)=>{
    try{
      const todo=await TodoController.todoModel.create(req.body);
      res.status(201).json({
        status:'Todo added successfully',
        data:todo
      });
    }
    catch(e){
      console.log(err);
    }
  }
}

export{TodoController};