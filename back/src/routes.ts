import {Router} from 'express'
import { FinancialServiceProvider } from './App/Domains/Financial/Providers/FinancialServiceProvider'
import { AuthServiceProvider } from './App/Domains/Auth/Providers/AuthServiceProvider'

export const appRouter = Router()
    .use(new AuthServiceProvider().getRoutes())
    .use(new FinancialServiceProvider().getRoutes())
   
