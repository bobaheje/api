import { AutoIncrementID } from '@typegoose/auto-increment';
import { plugin, prop } from '@typegoose/typegoose';


@plugin(AutoIncrementID, {})
class Todo{
  @prop()
  public _id?:number;

  @prop({require:true, unique:true})
  public title?:string;

  @prop({require:true})
  public description?:string;
}

export {Todo};


