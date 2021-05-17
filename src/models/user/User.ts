import { AutoIncrementID } from "@typegoose/auto-increment";
import { plugin, prop } from "@typegoose/typegoose";

@plugin(AutoIncrementID,{})
class User {
  @prop()
  public _id.:number;

  @prop({required:true,unique:true})
  public email?:string;

  @prop({required:true})
  public firstname?:string;

  @prop({required:true})
  public lastname?:string;

}

export {User}