import { connect } from 'mongoose';

class DatabaseConnector {
  static async initDatabase(){
    try{
    return await connect(process.env.DB_URI || 'mongodb://localhost:27017/tododb', {
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:true
      });
    }
    catch(e){
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };
}

export {DatabaseConnector};