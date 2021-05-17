
import { json } from 'body-parser';
import express from 'express';

import { apiTodoRouter } from './api.router';
import { ErrorMiddleware } from './middlewares/error';
import { apiUserRouter } from './user.router';

//setup environment variables

//
//database


//express

const app=express();
app.use(json());
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