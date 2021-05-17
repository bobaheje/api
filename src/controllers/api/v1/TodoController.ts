import { getModelForClass } from '@typegoose/typegoose';
import { Request, Response} from 'express';
import { Todo } from '../../../models/todo/Todo';

class TodoController {
  static todoModel=getModelForClass(Todo);
  
  static findAll=async (req:Request, res:Response)=>{
    
    return res.json(await TodoController.todoModel.find());
  }

 static create=async( req:Request, res:Response)=>{
    
    return res.json(await TodoController.todoModel.create(req.body));
    
  }
static update=async (req:Request, res:Response)=>{
    const {id}=req.params;
    return res.json(await TodoController.todoModel.updateOne({_id:id}, req.body));
    
  }
static findOne= async(req:Request, res:Response)=>{
  const {id}=req.params;
  return res.json(await TodoController.todoModel.findOne({_id:id}));
}
 static delete=async (req:Request, res:Response)=>{
      res.json(await TodoController.todoModel.deleteOne({_id:req.params.id}));
  }
}

export{TodoController};