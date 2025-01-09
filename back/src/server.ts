import { ENV } from '@config/Enviroment';
import express from 'express';

const app = express();

app.use(express.json());

app.listen(ENV.PORT_APP,()=>{
    console.log(`Server running on port ${ENV.PORT_APP}`);
})