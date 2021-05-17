
import { json } from 'body-parser';
import express from 'express';

import { apiTodoRouter } from './api.router';
import { ErrorMiddleware } from './middlewares/error';

//setup environment variables

//
//database


//express

const app=express();
app.use(json());
app.use(apiTodoRouter);

// Not found
app.use(ErrorMiddleware.notFound);
app.use(ErrorMiddleware.appError);
//static files

//app.use(express.static(`${process.cwd()}/public`));

//Parse request
//app.use(urlencoded({extended:true}));


export {app};