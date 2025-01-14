import express from 'express';

import { appRouter } from './routes';
import { ENV } from '@config/Enviroment';

const app = express();

app.use(express.json());
app.use(appRouter)

app.listen(ENV.PORT_APP,()=>{
    console.log(`Server running on port ${ENV.PORT_APP}`);
})