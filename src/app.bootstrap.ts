
import express, { json, urlencoded } from 'express';
import { ErrorMiddleware } from './middlewares/error';
import { PassportConfig } from './middlewares/Passport';
import { apiUserRouter } from './routes/user.router';
import { apiAuthRouter } from './routes/auth.router';
import { apiTodoRouter } from './routes/api.router';
import helmet from 'helmet';
import cors from 'cors';

//setup environment variables

//
//database


//express

const app=express();
app.use(helmet());
app.use(cors());
app.use(urlencoded({extended:true}));
app.use(json());
app.use(PassportConfig.configure);
app.use(apiAuthRouter);
app.use(apiTodoRouter);
app.use(apiUserRouter);

// Not found
app.use(ErrorMiddleware.notFound);
app.use(ErrorMiddleware.appError);
//static files

//app.use(express.static(`${process.cwd()}/public`));

//Parse request
//app.use(urlencoded({extended:true}));


export {app};