import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT  = process.env.PORT || 4000;

const app: Application = express();

app.get('/', (req: Request, res: Response)=>{
    res.status(200).send("Hello World");
})

app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT)
})