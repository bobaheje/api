import dotenv from 'dotenv';
import express, { urlencoded } from 'express';
import { DatabaseConnector } from '../app.database';
import { apiTodoRouter } from './api.router';

//setup environment variables

dotenv.config({path:'config.env'});
//database
DatabaseConnector.initDatabase();

//express

const app=express();
app.use(apiTodoRouter);
//static files

app.use(express.static(`${process.cwd()}/public`));

//Parse request
app.use(urlencoded({extended:true}));
app.set('name', process.env.APP_NAME);

export {app};