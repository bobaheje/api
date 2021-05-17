import { config } from 'dotenv';
import { app } from './app.bootstrap';


config({path:'config.env'});

const init= async ()=>{
  app.listen(process.env.PORT, ()=>{
    // eslint-disable-next-line no-console
    console.log(`the ${app.get('name')} is listening on port : ${process.env.PORT}`);
  });
  
};

init();