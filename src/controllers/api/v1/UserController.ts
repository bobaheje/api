import { getModelForClass } from '@typegoose/typegoose';
import { Request, Response } from 'express';


class UserController {
  static userModel=getModelForClass(UserController);

  static create=async (req:Request, res:Response)=>{
    res.json(await UserController.userModel.create(req.body));
  }

  static findOne=async (req:Request, res:Response)=>{
    const{id}=req.params;
    res.json( await UserController.userModel.findById({_id:id}));
  }

  static findAll=async (req:Request, res:Response)=>{
    res.json(await UserController.userModel.find());
  }

  static delete=async (req:Request, res:Response)=>{
    const{id}=req.params;
    res.json( await UserController.userModel.deleteOne({_id:id}));
  }
  static update=async (req:Request, res:Response)=>{
    const{id}=req.params;
    res.json( await UserController.userModel.updateOne({_id:id}, req.body));
  }

}; 

export{UserController};