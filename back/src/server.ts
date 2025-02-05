import express from 'express';
import cors from 'cors';

import { ENV } from '@config/Enviroment';
import { appRouter } from './routes';
import { appError } from './error';

const app = express();

app.use(cors());
app.use(express.json());
app.use(appRouter)
app.use(appError)

app.listen(ENV.PORT_APP,()=>{
    console.log(`Server running on port ${ENV.PORT_APP}`);
})